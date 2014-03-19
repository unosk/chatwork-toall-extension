$(function() {
  var chatText = $('#_chatText');
  var to = $('#_to');
  var toAll = to.clone()
      .attr('id', '_toAll')
      .attr('aria-label', '全員に呼びかけることができます')
      .click(function() {
        if ($('#_subRoomMemberArea').is(':hidden')) {
          return;
        }
        var str = '';
        $('#_subRoomMemberList img').each(function() {
          var id = $(this).attr('data-aid');
          str += (id !== null) ? '[To:'+ id +'] ': '';
        });
        str += "\n";
        chatText.focus();
        var s = chatText.val();
        var p = chatText.get(0).selectionStart;
        var np = p + str.length;
        chatText.val(s.substr(0, p) + str + s.substr(p));
        chatText.get(0).setSelectionRange(np, np);
      });
  to.after(toAll);
});
