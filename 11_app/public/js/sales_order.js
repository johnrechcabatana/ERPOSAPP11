cur_frm.cscript.refresh=function (frm)
{
	cur_frm.set_df_property("item_name", "reqd",0);
}
cur_frm.cscript.item_code=function(doc, cdt, cdn)
{	var values= locals[cdt][cdn];
	var stock_uom;
	frappe.call({
		method:"11_app.script.stock_entry.getitems",
		args:{"item_code":values.item_code},
		callback:function(r)
		{
			console.log(r.message);
		    frappe.model.set_value(cdt, cdn, "volume",r.message[0].item_name+","+ r.message[0].volume+" "+(r.message[0].brand_name || ""));
		    frappe.model.set_value(cdt, cdn, "description", r.message[0].description);
		    frappe.model.set_value(cdt, cdn, "brand_name", r.message[0].brand_name);
		    // frappe.model.set_value(cdt, cdn, "uom", r.message[0].stock_uom);
		    stock_uom=r.message[0].stock_uom;
		}
	});

}
cur_frm.cscript.batch_no=function(frm, cdt, cdn)
{
	var values = locals[cdt][cdn];
	frappe.call({
		method:"11_app.script.item.getBatchid",
		args:{"batch_id":values.batch_no},
		callback:function(r)
		{
			console.log(r.message);
			frappe.model.set_value(cdt, cdn, "batch_expiry", r.message[0].expiry_date);
		}
	})
}
cur_frm.cscript.uom=function(frm, cdt, cdn)
{
	var values = locals[cdt][cdn];
	console.log(values.item_code);
	console.log(values.uom);
	frappe.call({
		method:"11_app.script.stock_entry.rate_selling",
		args:{"uom":values.uom,"item_code":values.item_code},
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
cur_frm.cscript.qty = function(doc, cdt, cdn)
{
	var values = locals[cdt][cdn];
	console.log(values.qty);
	console.log(doc.set_warehouse);
	frappe.call({
		method:"11_app.script.item.getActual_qty",
		args:{"item_code":values.item_code,"warehouse":doc.set_warehouse},
		callback:function(r)
		{	
			if(r.message[0].actual_qty < values.qty)
			{
				frappe.model.set_value(cdt, cdn,"qty",0);
				frappe.throw("Actual Quantity is "+r.message[0].actual_qty+", reduce Quantity");
			}
		}
	});

}