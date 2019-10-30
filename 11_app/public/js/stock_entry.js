cur_frm.cscript.material_request_type=function(frm)
{
   me.frm.set_query("item_code","items", function(doc, cdt, cdn){
            return {
                query: "11_app.script.item.getitems"
            };
    });
}
cur_frm.cscript.item_code=function(doc, cdt, cdn)
{
	var values= locals[cdt][cdn];
	frappe.call({
		method:"11_app.script.stock_entry.getitems",
		args:{"item_code":values.item_code},
		callback:function(r)
		{
			console.log(r.message);
		    frappe.model.set_value(cdt, cdn, "item_info", r.message[0].item_group+","+r.message[0].generic_name+","+r.message[0].volume+","+r.message[0].item_type);
		}
	});
}