var monthYearCalendar = {
    selectedMonth: "",
    selectedYear: "",
    monthNames: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    onSelected: null,
    init: function(id, f) {
        monthYearCalendar.generateMonthYearBox(id);
        monthYearCalendar.generateMonthView();
        monthYearCalendar.addEvents();
        monthYearCalendar.setInitialValues();
        monthYearCalendar.setCurrentDate();
        monthYearCalendar.onSelected = f;
    },
    addEvents: function() {
     // $("#containerMonth > div").click(monthYearCalendar.selectMonth); 
     
     var selArray = document.getElementById('containerMonth').getElementsByTagName('div');
	var str = '';
	for (var i=0; i<selArray.length; i++) { 
		selArray[i].onclick = monthYearCalendar.selectMonth;
	}
	document.getElementById("pre").onclick = monthYearCalendar.preYear;
	document.getElementById("next").onclick = monthYearCalendar.nextYear;  
	document.getElementById("calendarIcon").onclick = monthYearCalendar.toggle
    },
    generateMonthYearBox: function(id) {
        var b = "";
        b += "<div id=\"calendarIcon\"></div><div id=\"containerMonthYear\"><div id=\"containerYear\"><span id=\"arrow\"></span><div id=\"pre\"></div>";
        b += "<div id=\"currentYear\"></div><div id=\"next\"></div>";
        b += "</div>";
        b += "<div id=\"containerMonth\"></div>";
        b += "</div>";
        document.getElementById(id).innerHTML = b;
    },
    generateMonthView: function() {
        var m = "";
        for (var i = 0; i < monthYearCalendar.monthNames.length; i++) {
            m += "<div id=\"m" + (i + 1) + "\">" + monthYearCalendar.monthNames[i] + "</div>";
        }
        document.getElementById("containerMonth").innerHTML = m;
    },
    setInitialValues: function() {
        monthYearCalendar.selectedMonth = new Date().getMonth() + 1;
        monthYearCalendar.selectedYear = new Date().getFullYear();
        document.getElementById("currentYear").innerHTML  = monthYearCalendar.selectedYear;
    },
    setCurrentDate: function() {	  
	addClass('selectedMonth',document.getElementById("m" + (monthYearCalendar.selectedMonth)));
    },
    preYear: function() {
        monthYearCalendar.selectedYear = parseInt(document.getElementById("currentYear").innerHTML) - 1;
        document.getElementById('currentYear').innerHTML  = monthYearCalendar.selectedYear;
        monthYearCalendar.eventSelected();
    },
    nextYear: function() {
        monthYearCalendar.selectedYear = parseInt(document.getElementById("currentYear").innerHTML) + 1;
        document.getElementById("currentYear").innerHTML = monthYearCalendar.selectedYear;
        monthYearCalendar.eventSelected();
    },
    selectMonth: function() {
	monthYearCalendar.selectedMonth = this.getAttribute("id").replace("m", "");
	var selArray = document.getElementById('containerMonth').getElementsByTagName('div');
	var str = '';
	for (var i=0; i<selArray.length; i++) { 
		removeClass('selectedMonth',selArray[i]);
	}
	addClass('selectedMonth',this);
	monthYearCalendar.eventSelected();
    },
    toggle: function() {
        var cmy = document.getElementById("containerMonthYear");
        cmy.style.display == "block" ? cmy.style.display = "none" : cmy.style.display= "block";
    },
    eventSelected: function() {
        if (monthYearCalendar.onSelected != null) {
            monthYearCalendar.onSelected();    
        }
    }
}

function addClass( classname, element ) {
    var cn = element.className;
    if( cn.indexOf( classname ) != -1 ) {
    	return;
    }
    if( cn != '' ) {
    	classname = ' '+classname;
    }
    element.className = cn+classname;
}

function removeClass( classname, element ) {
    var cn = element.className;
    var rxp = new RegExp( "\\s?\\b"+classname+"\\b", "g" );
    cn = cn.replace( rxp, '' );
    element.className = cn;
}