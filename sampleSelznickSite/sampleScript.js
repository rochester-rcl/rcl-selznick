//A sample $ script that makes the metadata field visible when the #toggleMetadata button is clicked

		$(document).ready(function() {
			$.ajax({
					type: "GET",
					url: "metadataOutput.xml",
					dataType: "xml",
					success: function (xml) {
						var format = $(xml).find('Format').text();
						var fileSize = $(xml).find('Filesize').text();
						var duration = $(xml).find('Duration').text();
						
						 //Some sample Popcorn code to make the video more dynamic
                                                var popcorn = Popcorn("#myVideo");
                                                popcorn.footnote({
                                                        start: 0.5,
                                                        end: 3,
                                                        text: 'Joy Commercial <br />Duration:&nbsp;' + duration,
                                                        target: "myVideoNote"
                                                        });

						$('#hiddenDiv').append('<span class="xmlData"><i>Format:&nbsp;' + format + '</i><br /><i>File Size:&nbsp;' + fileSize + '</i><br /><i>Duration:&nbsp;' + duration + '</i><br /></span>');


						}
					});


			$("#toggleMetadata").click(function () {
				if ($("#hiddenDiv").is(":hidden")) {
					$("#hiddenDiv").fadeIn(["fast"], ["linear"]);
					
				} else {
					$("#hiddenDiv").hide();
	
				}
			});

		
		});
