jQuery(document).ready(function($){initSendAnalyticsEvent();initTrackingGlobalHubSpotForms();function initSendAnalyticsEvent(){window.sendAnalyticsEvent=function(eventObj){if(window.ga&&ga.loaded){var gaObjectData={hitType:'event',...eventObj};if("ga"in window){tracker=ga.getAll()[0];if(tracker){tracker.send(gaObjectData)}}
if(window.location.host!=='connecteam.com'){console.log('Sending Tracking Event To Google Analytics',gaObjectData)}}}}
function initTrackingGlobalHubSpotForms(){$(document).on('hubspot_form_submit',function(e,eventInfo){if(eventInfo.status){window.sendAnalyticsEvent({eventCategory:"Forms",eventLabel:"Form: "+eventInfo.formName,eventAction:"Submit: "+eventInfo.status,})}})}
function getUrlParam(name,url){if(!url)url=window.location.href;name=name.replace(/[\[\]]/g,"\\$&");var regex=new RegExp("[?&]"+name+"(=([^&#]*)|&|#|$)"),results=regex.exec(url);if(!results)return null;if(!results[2])return'';return decodeURIComponent(results[2].replace(/\+/g," "))}})