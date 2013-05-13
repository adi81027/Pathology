/* ===========================================================
 * reddot v1.0
 * Write here for documentation
 * =========================================================== */

 /* ID TAGS DEFINITION OF ALL THE ADMIN ID TAGS THAT ARE USED ON THE ADMIN SECTION
  * =============================== */
var usr_typ ='#id_usertype';           					// field id for type of user on Registration Form.
var usr_basic_flds = '#basic_reg_fields';  				// fieldset id for Basic Registration Fields
var usr_add_stud_flds = '#add_stud_fields';				// fieldset id for Additional Student Details for student user
var usr_parent_flds = '#parent_fields';					// fieldset parent user fields



 /* FUNCTIONS THAT WOULD BE USED FOR FUNCTIONALITY
  * =============================== */
 
 function showhidefields(value)
 {
 				if (value == 1)
				{
					// If Student user is selected.
					
						$(usr_basic_flds).show();
						$(usr_add_stud_flds).show();
						$(usr_parent_flds).hide();
					
				}
				else if (value == 7)
				{
					// if parent user is selected. 
					
						$(usr_basic_flds).show();
						$(usr_add_stud_flds).hide();
						$(usr_parent_flds).show();
		
				}
				else{
					// if teacher user is selected
					
						$(usr_basic_flds).show();
						$(usr_add_stud_flds).hide();
						$(usr_parent_flds).hide();
				}
 }
$(document).ready(
	function(){
		
			showhidefields($(usr_typ).val());

	}
)

$(usr_typ).change(
	function(){
				
			showhidefields($(usr_typ).val());
	}
)

$(function() {
    $( "#id_dob" ).datepicker(
    							{
						            changeMonth: true,
						            changeYear: true,
						            dateFormat: "yy-mm-dd", 
						            yearRange: "-25:+0",
						        }
    						);
});



