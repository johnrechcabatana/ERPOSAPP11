import frappe

@frappe.whitelist()
def getitems(item_code):
    return frappe.db.sql("""select * from `tabItem` where item_code= %s""", item_code, as_dict=1); 