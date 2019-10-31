
cur_frm.cscript.item_code=function(doc, cdt, cdn)
{	var values= locals[cdt][cdn];
	frappe.call({
		method:"11_app.script.stock_entry.getitems",
		args:{"item_code":values.item_code},
		callback:function(r)
		{
			console.log(r.message);
			var checkbrand;
			if(r.message[0].brand_name != null)
			{
				checkbrand = r.message[0].brand_name;
			}
			else{checkbrand = "none" }
		    frappe.model.set_value(cdt, cdn, "volume","GN: "+r.message[0].item_name+",vl: "+ r.message[0].volume+",type:"+r.message[0].item_type+",group: "+r.message[0].item_group);
		    frappe.model.set_value(cdt, cdn, "description", "sales");
		    frappe.model.set_value(cdt, cdn, "item_name", checkbrand);
		    frappe.model.set_value(cdt, cdn, "uom", r.message[0].stock_uom);
		}
	});

	frappe.call({
		method:"11_app.script.stock_entry.rate",
		args:{"item_code":values.item_code},
		callback:function(r)
		{
			console.log(r.message);
			if(r.message[0].price_list_rate != null)
			{
				frappe.model.set_value(cdt, cdn, "rate", r.message[0].price_list_rate);
			}
		}
	});
}
cur_frm.cscript.customer=function(frm)
{
   me.frm.set_query("item_code","items", function(doc, cdt, cdn){
            return {
                query: "11_app.script.item.getitems"
            };
    });
}