
cur_frm.cscript.item_code=function(doc, cdt, cdn)
{	var values= locals[cdt][cdn];
	frappe.call({
		method:"11_app.script.stock_entry.getitems",
		args:{"item_code":values.item_code},
		callback:function(r)
		{
			console.log(r.message);
		    frappe.model.set_value(cdt, cdn, "volume", r.message[0].volume);
		    frappe.model.set_value(cdt, cdn, "item_type", r.message[0].item_type);
		    frappe.model.set_value(cdt, cdn, "item_name", r.message[0].item_name +","+ r.message[0].brand_name);
		    frappe.model.set_value(cdt, cdn, "uom", r.message[0].stock_uom);
		}
	});

	frappe.call({
		method:"11_app.script.stock_entry.rate",
		args:{"item_code":values.item_code},
		callback:function(r)
		{
			console.log(r.message);
			frappe.model.set_value(cdt, cdn, "rate", r.message[0].price_list_rate);
		}
	});
}