
              
     var needs_total = 0;
    var wants_total = 0;
    var savings_total = 0;
    var income = 0;
    var run_income = 0;
    var total = 0;
        
    var needs_p = 0;
     var wants_p = 0;
    var savings_p = 0;
        
        
    
    function income_calc(){
         income = document.getElementById('income_field').value;
               document.getElementById('income_total').innerHTML = "$" + income;
        
    }
        
    function needs_calc(){
        
        if(document.getElementById("field1_1").value.length == 0){document.getElementById("field1_1").value = 0 ;}
        if(document.getElementById("field1_2").value.length == 0){document.getElementById("field1_2").value = 0 ;}
        if(document.getElementById("field1_3").value.length == 0){document.getElementById("field1_3").value = 0 ;}
        if(document.getElementById("field1_4").value.length == 0){document.getElementById("field1_4").value = 0 ;}
        if(document.getElementById("field1_5").value.length == 0){document.getElementById("field1_5").value = 0 ;}
        
        
        var field1_1 = document.getElementById('field1_1').value;
        var field1_2 = document.getElementById('field1_2').value;
        var field1_3 = document.getElementById('field1_3').value;
        var field1_4 = document.getElementById('field1_4').value;
        var field1_5 = document.getElementById('field1_5').value;
        
      
        needs_total = parseInt(field1_1) + parseInt(field1_2) + parseInt(field1_3)+ parseInt(field1_4)+ parseInt(field1_5);
        
        
        document.getElementById('needs_total').innerHTML = "$" + needs_total;
        
        total = parseInt(needs_total) + parseInt(wants_total)
        document.getElementById('combined_total').innerHTML = "$" + total;
        
        needs_p = parseInt(needs_total)/total;
        document.getElementById('needs_p').innerHTML = needs_p;
        
        run_income = income - total;
        document.getElementById('run_income').innerHTML = "$" + run_income;
        
          document.getElementById('graph_frame').style.backgroundColor = "white"
        
        
    }
        
    function back_to_needs() {
        document.getElementById('wants_div').style.display = "none"
        document.getElementById('needs_div').style.display = "inline-block"
        
        needs_total = 0;
        document.getElementById('needs_total').innerHTML ="$" + needs_total;
        wants_total = 0;
        document.getElementById('wants_total').innerHTML = "$" + wants_total;
        total = 0
        document.getElementById('combined_total').innerHTML = "$" + total;
        
        
    }
        
        function wants_calc(){
        
        if(document.getElementById("field2_1").value.length == 0){document.getElementById("field2_1").value = 0 ;}
        if(document.getElementById("field2_2").value.length == 0){document.getElementById("field2_2").value = 0 ;}
        if(document.getElementById("field2_3").value.length == 0){document.getElementById("field2_3").value = 0 ;}
        if(document.getElementById("field2_4").value.length == 0){document.getElementById("field2_4").value = 0 ;}
        if(document.getElementById("field2_5").value.length == 0){document.getElementById("field2_5").value = 0 ;}
            
        var field2_1 = document.getElementById('field2_1').value;
        var field2_2 = document.getElementById('field2_2').value;
        var field2_3 = document.getElementById('field2_3').value;
        var field2_4 = document.getElementById('field2_4').value;
        var field2_5 = document.getElementById('field2_5').value;
        
        wants_total = parseInt(field2_1) + parseInt(field2_2)+ parseInt(field2_3)+ parseInt(field2_4)+ parseInt(field2_5);
        document.getElementById('wants_total').innerHTML = "$" + wants_total;
        
        total = parseInt(needs_total) + parseInt(wants_total)
        document.getElementById('combined_total').innerHTML = "$" + total;
            
        run_income = income - total;
        document.getElementById('run_income').innerHTML = "$" + run_income;
            
        
    }
        
    function back_to_wants() {
        document.getElementById('savings_div').style.display = "none"
        document.getElementById('wants_div').style.display = "inline-block"
        wants_total = 0;
        document.getElementById('wants_total').innerHTML = "$" + wants_total;
        total = parseInt(needs_total)
        document.getElementById('combined_total').innerHTML = "$" + total;
        
    }
        
        function savings_calc(){
        
        if(document.getElementById("field3_1").value.length == 0){document.getElementById("field3_1").value = 0 ;}
        if(document.getElementById("field3_2").value.length == 0){document.getElementById("field3_2").value = 0 ;}
        if(document.getElementById("field3_3").value.length == 0){document.getElementById("field3_3").value = 0 ;}
       
        
        
        var field3_1 = document.getElementById('field3_1').value;
        var field3_2 = document.getElementById('field3_2').value;
        var field3_3 = document.getElementById('field3_3').value;
       
        
        
        savings_total = parseInt(field3_1) + parseInt(field3_2)+ parseInt(field3_3);
        document.getElementById('savings_total').innerHTML = "$" + savings_total;
        
        total = parseInt(needs_total) + parseInt(wants_total) + parseInt(savings_total)
        document.getElementById('combined_total').innerHTML = "$" + total;
        
            run_income = income - total;
        document.getElementById('run_income').innerHTML = "$" + run_income;
           
    }
        
    function back_to_savings() {
        document.getElementById('final_div').style.display = "none"
        document.getElementById('savings_div').style.display = "inline-block"
        
        savings_total=0;
        document.getElementById('savings_total').innerHTML = "$" + savings_total;
         total = parseInt(needs_total) + parseInt(wants_total) + parseInt(savings_total)
        document.getElementById('combined_total').innerHTML = "$" + total;
        
    }
        
        
        
        
        
        
        
    function hide_income(){           
        document.getElementById('needs_div').style.display = "inline-block";
        document.getElementById('income_div').style.display = "none";
               
               
    }
    
    function back_to_income() {
        document.getElementById('needs_div').style.display = "none";
        document.getElementById('income_div').style.display = "inline-block";
     
        
    }
    
     function hide_needs(){
        document.getElementById('needs_div').style.display = "none";
        document.getElementById('wants_div').style.display = "inline-block";
           
    }
        function hide_wants(){
        document.getElementById('wants_div').style.display = "none";
        document.getElementById('savings_div').style.display = "inline-block";
           
    }
           function hide_savings(){
        document.getElementById('savings_div').style.display = "none";
        document.getElementById('final_div').style.display = "inline-block";
           
    }
        function refresh_p(){
   
        needs_p = parseInt(needs_total)/total;
        document.getElementById('needs_p').innerHTML = needs_p;
        wants_p = parseInt(wants_total)/total;
        document.getElementById('wants_p').innerHTML = wants_p;
        savings_p = parseInt(savings_total)/total;
        document.getElementById('savings_p').innerHTML = savings_p;
            
        var needs_g = parseFloat(needs_p) * 300;
            document.getElementById('needs_g').innerHTML = Math.round(needs_p*100) + "%";
           var wants_g = parseFloat(wants_p) * 300;
            document.getElementById('wants_g').innerHTML = Math.round(wants_p*100)+ "%";
            var savings_g = parseFloat(savings_p) * 300;
              document.getElementById('savings_g').innerHTML = Math.round(savings_p*100)+ "%";
            
        document.getElementById('needs_graph').style.width = needs_g + "px";
            document.getElementById('wants_graph').style.width = wants_g + "px";
            document.getElementById('savings_graph').style.width = savings_g + "px";
            
            
        if (Number.isNaN(needs_p)){
            document.getElementById('needs_g').innerHTML = "-";
        }
        if (Number.isNaN(wants_p)){
            document.getElementById('wants_g').innerHTML = "-";
        }
        if (Number.isNaN(savings_p)){
            document.getElementById('savings_g').innerHTML = "-";
        }
        
        
        }
        
      
        
