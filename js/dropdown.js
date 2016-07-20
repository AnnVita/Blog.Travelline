$(function(){                                                 
	$(".support-header").click(function(){
        	$(".support-inside").show();
                $(".icon-close").show();
                return false;      
        });
        $(document).click(function(){
        	$(".support-inside").hide();
                $(".icon-close").hide();      
        });
});
