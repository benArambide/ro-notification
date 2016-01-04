# Ro-Notification

Ro-notification is a module for your angular project, now you have two types of notification:
  - Status
  - Growl
  
### Usage 

#### Including in tour html

```html
<head>
    <link rel="stylesheet" type="text/css" href="dist/ro-notification.css">
    <script type="text/javascript" src="src/ro-notification.js"></script>
</head>
```

#### Including in your app

```html
var app = angular.module('TestApp', ['RoNotification']);
```

#### Show status

```html
RoNotification.status('Your message here!','red'); 
```

#### Show growl

```html
RoNotification.growl('Title here!','Content message here!','red'); 
```

### Version
1.0.1

License
----

MIT


**Free Software, Hell Yeah!**
