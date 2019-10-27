import frappe


@frappe.whitelist()
def filt_itemby_supplier(doctype, txt, searchfield, start, page_len, filters):
    return frappe.db.sql("""Select parent from `tabItem Supplier` where  supplier= %s""",(filters.get("supplier"))); 

@frappe.whitelist()
def filteritem(doctype, txt, searchfield, start, page_len, filters):
    return frappe.db.sql("""select item_code, item_name, item_group, volume, item_type,stock_uom from `tabItem`"""); 