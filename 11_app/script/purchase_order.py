import frappe


@frappe.whitelist()
def filt_itemby_supplier(doctype, txt, searchfield, start, page_len, filters):
    return frappe.db.sql("""Select parent from `tabItem Supplier` where  supplier= %s""",(filters.get("supplier"))); 

@frappe.whitelist()
def filteritem(doctype, txt, searchfield, start, page_len, filters):
    return frappe.db.sql("""select `tabItem`.item_code, `tabItem`.item_name, `tabItem`.item_group, `tabItem`.volume, `tabItem`.item_type,`tabItem`.stock_uom, `tabItem Price`.price_list 
    	FROM `tabItem` inner join `tabItem Price` """); 

@frappe.whitelist()
def get_conversion_uom(item_code=""):
	return frappe.db.sql(""" SELECT uom, conversion_factor FROM `tabUOM Conversion Detail` WHERE parent=%s """,item_code, as_dict=1)