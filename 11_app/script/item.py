import frappe
@frappe.whitelist()
def getitems(doctype, txt, searchfield, start, page_len, filters):
     return frappe.db.sql("""SELECT item_code,volume,item_name, item_group,generic_name FROM `tabItem` """);

@frappe.whitelist()
def getBatch(doctype, txt, searchfield, start, page_len, filters):
	return frappe.db.sql(""" SELECT  expiry_date, batch_id FROM `tabBatch` WHERE item = %s""", (filters.get(item_code)), as_dict=1);

@frappe.whitelist()
def getBatchid(batch_id=""):
		return frappe.db.sql(""" SELECT  expiry_date FROM `tabBatch` WHERE name = %s""", batch_id, as_dict=1);

@frappe.whitelist()
def getActual_qty(item_code,warehouse):
	return frappe.db.sql(""" SELECT actual_qty FROM `tabBin` where item_code = %s && warehouse= %s """, (item_code,warehouse), as_dict=1);