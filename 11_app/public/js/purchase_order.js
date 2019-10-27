cur_frm.cscript.supplier=function(frm)
{
   me.frm.set_query("item_code","items", function(doc, cdt, cdn){
            return {
                query: "11_app.script.purchase_order.filteritem"
            };
    });
}