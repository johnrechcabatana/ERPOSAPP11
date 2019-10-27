frappe.ui.form.on('Item', {
    end_of_life: function(frm, cdt, cdn) {
        var values= locals[cdt][cdn];
        var endlif = new Date(values.end_of_life);
        var today =new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        var todaynum = mm + '-' + dd + '-' + yyyy;
        var datenow = new Date(todaynum);
        var time = endlif - datenow;
        var days = time / (1000 * 3600 * 24); 
        var num_of_days=parseInt(days);
        cur_frm.set_value("shelf_life_in_days",num_of_days);
        console.log("test");
    }
});
