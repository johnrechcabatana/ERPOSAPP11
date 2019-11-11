
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
		    frappe.model.set_value(cdt, cdn, "item_name", r.message[0].item_name +","+ (r.message[0].brand_name || "" ));
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

	// frappe.call({
	// 	method:"11_app.script.purchase_order.get_conversion_uom",
	// 	args:{"item_code":values.item_code},
	// 	callback(r){
	// 		console.log(r.message[1].conversion_factor);
	// 		var items = doc.fields_dict.items.grid.add_new_row();
	// 		frappe.model.set_value(items.doctype, debit_row.name, "conversion_factor", r.message[1].conversion_factor);
	// 		console.log('success');
	// 	}
	// });
}