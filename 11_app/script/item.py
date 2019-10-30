import frappe

def getitems(doctype, txt, searchfield, start, page_len, filters):
     return frappe.db.sql("""SELECT item_code,volume,item_name, item_group,generic_name FROM `tabItem` """);