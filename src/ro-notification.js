/**
*  Module Notification Status and growl - inspirated in kickstart
*
* Description
*/
var app = angular.module('RoNotification', []);

app.factory('RoNotification', ['$document','$interval','$timeout',function ($document,$interval,$timeout) 
{
    
    RoNotification = {
        status : status
    }

    return RoNotification;


    function status(message,color,Options)
    {
        var wrapper = angular.element(document.querySelector('#ro-noti-status'));

        var msg = (message) ? message :'You need a message...';
        var color = (color) ? color :'sky';

        if(wrapper.length == 0)
        {
            var statusTemplate = '<div id="ro-noti-status-wrap" class="ro-status-wrap"><div class="ro-status-msg ro-status-fade-in" id="ro-noti-status" data-color="'+color+'">'+msg +'</div></div>';
            var statusElement = angular.element(statusTemplate);
            var body = $document.find('body').eq(0);
            body.append(statusElement);
            $interval(function() {
              removeStatus();
            }, 4000, 1);
        }
    }

    function removeStatus()
    {
        var wrapper = angular.element(document.querySelector('#ro-noti-status-wrap'));
        wrapper.children('#ro-noti-status').addClass('ro-status-fade-out');
        $timeout(function() { wrapper.remove(); }, 200);
    }

    function _buildNotificationStatus()
    {

    }

return {

    };

}])
