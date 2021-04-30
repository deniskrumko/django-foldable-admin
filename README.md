django-foldable-admin
=====================

**django-foldable-admin** allows to collapse/expand application sections in [Django Administration](https://docs.djangoproject.com/en/1.11/ref/contrib/admin/).

**☠️ THIS PROJECT IS NO LONGER SUPPORTED ☠️**

![alt image](http://i.imgur.com/Z4bvJlX.png)

Requires:

  * Django >=1.8 (not tested on new versions since Django >= 2)
  * Python 2.7 or >=3.3 (not tested on new versions since Python >= 3.4)

Installation
------------

All required files you can find in `django-foldable-admin` folder.

### Add templates

Add following templates to your `templates` directory. For example:

```
templates
└── admin
    ├── foldable_admin.html
    └── index.html
```

In case, if you have own overridden `admin/index.html` template, you need to override `{% block content %}` in it:

```python
{% block content %}
{% include 'admin/foldable_admin.html' %}
{% endblock %}
```

Also see: [How to configure template settings in Django](https://docs.djangoproject.com/en/1.11/topics/templates/#configuration)

### Add JS and CSS

Add following files to your `static` directory. For example:

```
static
├── css
│   └── foldable_admin.css
└── js
    └── foldable_admin.js
```

Then you need to provide this JS and CSS files to `admin/index.html` template.

Template from project already have required lines. If you are using own template you need to add following sections:

**CSS:**

```html
{% block extrastyle %}{{ block.super }}
<!-- Default Django CSS -->
<link rel="stylesheet" type="text/css" href="{% static "admin/css/dashboard.css" %}" />
<!-- CSS for "django-foldable-admin" -->
<link rel="stylesheet" type="text/css" href="{% static "foldable_admin.css" %}" />
{% endblock %}
```

**Javascript:**
```html
{% block extrahead %}{{ block.super }}
<!-- JQuery 3.2.1 -->
<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
<!-- JS for "django-foldable-admin" -->
<script src="{% static 'foldable_admin.js' %}"></script>
{% endblock %}
```

**Note:** if you already have `JQuery` in template, you can not add it (or use newer version of CDN from [here](https://code.jquery.com/)).

Also see: [How to manage static files in Django](https://docs.djangoproject.com/en/1.11/howto/static-files/)

**Installation is completed!**

Customization
-------------

### All sections are expanded

To make all sections expanded by default, you can delete following code from `foldable_admin.js` (line 19):
```javascript
// Collapse all elements at the page load
// NOTE: You can remove it to make all sections expanded by default
$('.tbody-collapse')
.find('td, th')
.wrapInner('<div />')
.animate({
  'padding-top': '0px',
  'padding-bottom': '0px'
})
.children()
.slideUp();
```

### Remove "Expand all" button

To remove `Expand/Collapse all` button from index page, remove following lines from `foldable_admin.html` (line 16):
```html
{# Show "Expand all/Collapse all" button only on index page #}
{% if request.get_full_path == index_page %}
<a class="collapse-button">Expand all</a>
{% endif %}
```

License
-------
One day it will be here...
