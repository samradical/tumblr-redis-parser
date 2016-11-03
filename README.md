##Parse responses from [tumblr-redis](https://github.com/samradical/tumblr-redis)

Using Tumblr as  a CMS is interesting because often we just want to post little things.

Why not use Tumblr's own coding platform?

~ Quickly gets out of hand

~ Workflows get centered in their ecosystem rather than yours.

~ You can past HTML markup into Tumblr posts (change in tumblr settings)

<hr>

##How to organise?

Currently:

This has been used in React where each post after being organised using the tags is rendered to the page.

Up to you. This is using the `tags` in Tumblr with a devised system.

![](https://66.media.tumblr.com/b34813a9872b47f710e6f05a5848f1ef/tumblr_og33hxGTfD1vk3llio1_1280.png)


Example tag:  `<project>:<page>:<order_on_page>`


Response from `tumblr-redis`:

`Object {deux-tube: Object, alhambra: Object}`

Where deux-tube and alhambra are < projects >.

Within each are < page >

...




```
{
  "deux-tube": {
    "projects": [
      {
        "blog_name": "a3dddog",
        "id": 152694193940,
        "post_url": "http://a3dddog.tumblr.com/post/152694193940/deux-tube",
        "slug": "deux-tube",
        "type": "text",
        "date": "2016-11-03 18:55:35 GMT",
        "timestamp": 1478199335,
        "state": "published",
        "format": "html",
        "reblog_key": "GTGAHzwm",
        "tags": [
          "deux-tube:projects:0",
          "class:title"
        ],
        "short_url": "https://tmblr.co/ZLGFVf2EDI7yK",
        "summary": "Deux Tube",
        "recommended_source": null,
        "recommended_color": null,
        "note_count": 0,
        "title": null,
        "body": "<p>Deux Tube</p>",
        "reblog": {
          "tree_html": "",
          "comment": "<p>Deux Tube</p>"
        },
        "trail": [
          {
            "blog": {
              "name": "a3dddog",
              "active": true,
              "theme": {
                "avatar_shape": "square",
                "background_color": "#FAFAFA",
                "body_font": "Helvetica Neue",
                "header_bounds": "",
                "header_image": "https://assets.tumblr.com/images/default_header/optica_pattern_14.png?_v=8c2d3b00544b7efbc4ac06dc3f80e374",
                "header_image_focused": "https://assets.tumblr.com/images/default_header/optica_pattern_14_focused_v3.png?_v=8c2d3b00544b7efbc4ac06dc3f80e374",
                "header_image_scaled": "https://assets.tumblr.com/images/default_header/optica_pattern_14_focused_v3.png?_v=8c2d3b00544b7efbc4ac06dc3f80e374",
                "header_stretch": true,
                "link_color": "#529ECC",
                "show_avatar": true,
                "show_description": true,
                "show_header_image": true,
                "show_title": true,
                "title_color": "#444444",
                "title_font": "Gibson",
                "title_font_weight": "bold"
              },
              "share_likes": true,
              "share_following": true,
              "can_be_followed": true
            },
            "post": {
              "id": "152694193940"
            },
            "content_raw": "<p>Deux Tube</p>",
            "content": "<p>Deux Tube</p>",
            "is_current_item": true,
            "is_root_item": true
          }
        ],
        "can_like": true,
        "can_reblog": true,
        "can_send_in_message": true,
        "can_reply": false,
        "display_avatar": true,
        "className": "title"
      },
      {
        "blog_name": "a3dddog",
        "id": 152694376990,
        "post_url": "http://a3dddog.tumblr.com/post/152694376990/live-creative-entertainment-tool-streaming-video",
        "slug": "live-creative-entertainment-tool-streaming-video",
        "type": "text",
        "date": "2016-11-03 19:01:10 GMT",
        "timestamp": 1478199670,
        "state": "published",
        "format": "html",
        "reblog_key": "9fWHCyhY",
        "tags": [
          "deux-tube:projects:1"
        ],
        "short_url": "https://tmblr.co/ZLGFVf2EDIqeU",
        "summary": "Live creative entertainment tool streaming video content controlled by you, available on a platform we all use, to be mixed...",
        "recommended_source": null,
        "recommended_color": null,
        "note_count": 0,
        "title": null,
        "body": "<p>Live creative entertainment tool streaming video content controlled by you, available on a platform we all use, to be mixed together with audio.<br/> Below in a work in progress interface and some of it&rsquo;s outputs.</p>",
        "reblog": {
          "tree_html": "",
          "comment": "<p>Live creative entertainment tool streaming video content controlled by you, available on a platform we all use, to be mixed together with audio.<br> Below in a work in progress interface and some of it’s outputs.</p>"
        },
        "trail": [
          {
            "blog": {
              "name": "a3dddog",
              "active": true,
              "theme": {
                "avatar_shape": "square",
                "background_color": "#FAFAFA",
                "body_font": "Helvetica Neue",
                "header_bounds": "",
                "header_image": "https://assets.tumblr.com/images/default_header/optica_pattern_14.png?_v=8c2d3b00544b7efbc4ac06dc3f80e374",
                "header_image_focused": "https://assets.tumblr.com/images/default_header/optica_pattern_14_focused_v3.png?_v=8c2d3b00544b7efbc4ac06dc3f80e374",
                "header_image_scaled": "https://assets.tumblr.com/images/default_header/optica_pattern_14_focused_v3.png?_v=8c2d3b00544b7efbc4ac06dc3f80e374",
                "header_stretch": true,
                "link_color": "#529ECC",
                "show_avatar": true,
                "show_description": true,
                "show_header_image": true,
                "show_title": true,
                "title_color": "#444444",
                "title_font": "Gibson",
                "title_font_weight": "bold"
              },
              "share_likes": true,
              "share_following": true,
              "can_be_followed": true
            },
            "post": {
              "id": "152694376990"
            },
            "content_raw": "<p>Live creative entertainment tool streaming video content controlled by you, available on a platform we all use, to be mixed together with audio.<br> Below in a work in progress interface and some of it’s outputs.</p>",
            "content": "<p>Live creative entertainment tool streaming video content controlled by you, available on a platform we all use, to be mixed together with audio.<br /> Below in a work in progress interface and some of it’s outputs.</p>",
            "is_current_item": true,
            "is_root_item": true
          }
        ],
        "can_like": true,
        "can_reblog": true,
        "can_send_in_message": true,
        "can_reply": false,
        "display_avatar": true,
        "className": ""
      },
      {
        "blog_name": "a3dddog",
        "id": 152694427269,
        "post_url": "http://a3dddog.tumblr.com/post/152694427269",
        "slug": "",
        "type": "video",
        "date": "2016-11-03 19:02:42 GMT",
        "timestamp": 1478199762,
        "state": "published",
        "format": "html",
        "reblog_key": "k4VMcA9S",
        "tags": [
          "deux-tube:projects"
        ],
        "short_url": "https://tmblr.co/ZLGFVf2EDJ0w5",
        "summary": "",
        "recommended_source": null,
        "recommended_color": null,
        "note_count": 0,
        "caption": "",
        "reblog": {
          "tree_html": "",
          "comment": ""
        },
        "trail": [],
        "video_url": "https://vt.tumblr.com/tumblr_og2y84RDo41vjlpqw.mp4",
        "html5_capable": true,
        "thumbnail_url": "https://31.media.tumblr.com/tumblr_og2y84RDo41vjlpqw_frame1.jpg",
        "thumbnail_width": 640,
        "thumbnail_height": 360,
        "duration": 134,
        "player": [
          {
            "width": 250,
            "embed_code": "\n<video  id='embed-581ba8976a2e2145530799' class='crt-video crt-skin-default' width='250' height='141' poster='https://65.media.tumblr.com/tumblr_og2y84RDo41vjlpqw_smart1.jpg' preload='none' muted data-crt-video data-crt-options='{\"autoheight\":null,\"duration\":134,\"hdUrl\":false,\"filmstrip\":{\"url\":\"https:\\/\\/67.media.tumblr.com\\/previews\\/tumblr_og2y84RDo41vjlpqw_filmstrip.jpg\",\"width\":\"200\",\"height\":\"112\"}}' >\n    <source src=\"https://api.tumblr.com/video_file/t:zjfaZQO1NuVCAMhi3wGNWg/152694427269/tumblr_og2y84RDo41vjlpqw\" type=\"video/mp4\">\n</video>\n"
          },
          {
            "width": 400,
            "embed_code": "\n<video  id='embed-581ba8976a2e2145530799' class='crt-video crt-skin-default' width='400' height='225' poster='https://65.media.tumblr.com/tumblr_og2y84RDo41vjlpqw_smart1.jpg' preload='none' muted data-crt-video data-crt-options='{\"autoheight\":null,\"duration\":134,\"hdUrl\":false,\"filmstrip\":{\"url\":\"https:\\/\\/67.media.tumblr.com\\/previews\\/tumblr_og2y84RDo41vjlpqw_filmstrip.jpg\",\"width\":\"200\",\"height\":\"112\"}}' >\n    <source src=\"https://api.tumblr.com/video_file/t:zjfaZQO1NuVCAMhi3wGNWg/152694427269/tumblr_og2y84RDo41vjlpqw\" type=\"video/mp4\">\n</video>\n"
          },
          {
            "width": 500,
            "embed_code": "\n<video  id='embed-581ba8976a2e2145530799' class='crt-video crt-skin-default' width='500' height='281' poster='https://65.media.tumblr.com/tumblr_og2y84RDo41vjlpqw_smart1.jpg' preload='none' muted data-crt-video data-crt-options='{\"autoheight\":null,\"duration\":134,\"hdUrl\":false,\"filmstrip\":{\"url\":\"https:\\/\\/67.media.tumblr.com\\/previews\\/tumblr_og2y84RDo41vjlpqw_filmstrip.jpg\",\"width\":\"200\",\"height\":\"112\"}}' >\n    <source src=\"https://api.tumblr.com/video_file/t:zjfaZQO1NuVCAMhi3wGNWg/152694427269/tumblr_og2y84RDo41vjlpqw\" type=\"video/mp4\">\n</video>\n"
          }
        ],
        "video_type": "tumblr",
        "can_like": true,
        "can_reblog": true,
        "can_send_in_message": true,
        "can_reply": false,
        "display_avatar": true,
        "className": ""
      },
      {
        "blog_name": "a3dddog",
        "id": 152694413419,
        "post_url": "http://a3dddog.tumblr.com/post/152694413419",
        "slug": "",
        "type": "video",
        "date": "2016-11-03 19:02:14 GMT",
        "timestamp": 1478199734,
        "state": "published",
        "format": "html",
        "reblog_key": "6xuABG32",
        "tags": [
          "deux-tube:projects"
        ],
        "short_url": "https://tmblr.co/ZLGFVf2EDIzXh",
        "summary": "",
        "recommended_source": null,
        "recommended_color": null,
        "note_count": 0,
        "caption": "",
        "reblog": {
          "tree_html": "",
          "comment": ""
        },
        "trail": [],
        "video_url": "https://vt.tumblr.com/tumblr_og2y7fUOgo1vjlpqw.mp4",
        "html5_capable": true,
        "thumbnail_url": "https://31.media.tumblr.com/tumblr_og2y7fUOgo1vjlpqw_frame1.jpg",
        "thumbnail_width": 486,
        "thumbnail_height": 360,
        "duration": 89,
        "player": [
          {
            "width": 250,
            "embed_code": "\n<video  id='embed-581ba8976babe217146914' class='crt-video crt-skin-default' width='250' height='185' poster='https://67.media.tumblr.com/tumblr_og2y7fUOgo1vjlpqw_smart1.jpg' preload='none' muted data-crt-video data-crt-options='{\"autoheight\":null,\"duration\":89,\"hdUrl\":false,\"filmstrip\":{\"url\":\"https:\\/\\/67.media.tumblr.com\\/previews\\/tumblr_og2y7fUOgo1vjlpqw_filmstrip.jpg\",\"width\":\"200\",\"height\":\"148\"}}' >\n    <source src=\"https://api.tumblr.com/video_file/t:zjfaZQO1NuVCAMhi3wGNWg/152694413419/tumblr_og2y7fUOgo1vjlpqw\" type=\"video/mp4\">\n</video>\n"
          },
          {
            "width": 400,
            "embed_code": "\n<video  id='embed-581ba8976babe217146914' class='crt-video crt-skin-default' width='400' height='296' poster='https://67.media.tumblr.com/tumblr_og2y7fUOgo1vjlpqw_smart1.jpg' preload='none' muted data-crt-video data-crt-options='{\"autoheight\":null,\"duration\":89,\"hdUrl\":false,\"filmstrip\":{\"url\":\"https:\\/\\/67.media.tumblr.com\\/previews\\/tumblr_og2y7fUOgo1vjlpqw_filmstrip.jpg\",\"width\":\"200\",\"height\":\"148\"}}' >\n    <source src=\"https://api.tumblr.com/video_file/t:zjfaZQO1NuVCAMhi3wGNWg/152694413419/tumblr_og2y7fUOgo1vjlpqw\" type=\"video/mp4\">\n</video>\n"
          },
          {
            "width": 500,
            "embed_code": "\n<video  id='embed-581ba8976babe217146914' class='crt-video crt-skin-default' width='500' height='370' poster='https://67.media.tumblr.com/tumblr_og2y7fUOgo1vjlpqw_smart1.jpg' preload='none' muted data-crt-video data-crt-options='{\"autoheight\":null,\"duration\":89,\"hdUrl\":false,\"filmstrip\":{\"url\":\"https:\\/\\/67.media.tumblr.com\\/previews\\/tumblr_og2y7fUOgo1vjlpqw_filmstrip.jpg\",\"width\":\"200\",\"height\":\"148\"}}' >\n    <source src=\"https://api.tumblr.com/video_file/t:zjfaZQO1NuVCAMhi3wGNWg/152694413419/tumblr_og2y7fUOgo1vjlpqw\" type=\"video/mp4\">\n</video>\n"
          }
        ],
        "video_type": "tumblr",
        "can_like": true,
        "can_reblog": true,
        "can_send_in_message": true,
        "can_reply": false,
        "display_avatar": true,
        "className": ""
      },
      {
        "blog_name": "a3dddog",
        "id": 152694404778,
        "post_url": "http://a3dddog.tumblr.com/post/152694404778",
        "slug": "",
        "type": "video",
        "date": "2016-11-03 19:01:55 GMT",
        "timestamp": 1478199715,
        "state": "published",
        "format": "html",
        "reblog_key": "new9Epas",
        "tags": [
          "deux-tube:projects"
        ],
        "short_url": "https://tmblr.co/ZLGFVf2EDIxQg",
        "summary": "",
        "recommended_source": null,
        "recommended_color": null,
        "note_count": 0,
        "caption": "",
        "reblog": {
          "tree_html": "",
          "comment": ""
        },
        "trail": [],
        "video_url": "https://vt.tumblr.com/tumblr_og2y70Dqdl1vjlpqw.mp4",
        "html5_capable": true,
        "thumbnail_url": "https://31.media.tumblr.com/tumblr_og2y70Dqdl1vjlpqw_frame1.jpg",
        "thumbnail_width": 634,
        "thumbnail_height": 354,
        "duration": 50,
        "player": [
          {
            "width": 250,
            "embed_code": "\n<video  id='embed-581ba8976c163660085124' class='crt-video crt-skin-default' width='250' height='140' poster='https://66.media.tumblr.com/tumblr_og2y70Dqdl1vjlpqw_smart1.jpg' preload='none' muted data-crt-video data-crt-options='{\"autoheight\":null,\"duration\":50,\"hdUrl\":false,\"filmstrip\":{\"url\":\"https:\\/\\/66.media.tumblr.com\\/previews\\/tumblr_og2y70Dqdl1vjlpqw_filmstrip.jpg\",\"width\":\"200\",\"height\":\"111\"}}' >\n    <source src=\"https://api.tumblr.com/video_file/t:zjfaZQO1NuVCAMhi3wGNWg/152694404778/tumblr_og2y70Dqdl1vjlpqw\" type=\"video/mp4\">\n</video>\n"
          },
          {
            "width": 400,
            "embed_code": "\n<video  id='embed-581ba8976c163660085124' class='crt-video crt-skin-default' width='400' height='223' poster='https://66.media.tumblr.com/tumblr_og2y70Dqdl1vjlpqw_smart1.jpg' preload='none' muted data-crt-video data-crt-options='{\"autoheight\":null,\"duration\":50,\"hdUrl\":false,\"filmstrip\":{\"url\":\"https:\\/\\/66.media.tumblr.com\\/previews\\/tumblr_og2y70Dqdl1vjlpqw_filmstrip.jpg\",\"width\":\"200\",\"height\":\"111\"}}' >\n    <source src=\"https://api.tumblr.com/video_file/t:zjfaZQO1NuVCAMhi3wGNWg/152694404778/tumblr_og2y70Dqdl1vjlpqw\" type=\"video/mp4\">\n</video>\n"
          },
          {
            "width": 500,
            "embed_code": "\n<video  id='embed-581ba8976c163660085124' class='crt-video crt-skin-default' width='500' height='279' poster='https://66.media.tumblr.com/tumblr_og2y70Dqdl1vjlpqw_smart1.jpg' preload='none' muted data-crt-video data-crt-options='{\"autoheight\":null,\"duration\":50,\"hdUrl\":false,\"filmstrip\":{\"url\":\"https:\\/\\/66.media.tumblr.com\\/previews\\/tumblr_og2y70Dqdl1vjlpqw_filmstrip.jpg\",\"width\":\"200\",\"height\":\"111\"}}' >\n    <source src=\"https://api.tumblr.com/video_file/t:zjfaZQO1NuVCAMhi3wGNWg/152694404778/tumblr_og2y70Dqdl1vjlpqw\" type=\"video/mp4\">\n</video>\n"
          }
        ],
        "video_type": "tumblr",
        "can_like": true,
        "can_reblog": true,
        "can_send_in_message": true,
        "can_reply": false,
        "display_avatar": true,
        "className": ""
      }
    ],
    "home": [
      {
        "blog_name": "a3dddog",
        "id": 152653802255,
        "post_url": "http://a3dddog.tumblr.com/post/152653802255/deux-tube-continuous-combination-integration",
        "slug": "deux-tube-continuous-combination-integration",
        "type": "text",
        "date": "2016-11-02 20:09:26 GMT",
        "timestamp": 1478117366,
        "state": "published",
        "format": "html",
        "reblog_key": "LKyJtPrF",
        "tags": [
          "deux-tube:home:0"
        ],
        "short_url": "https://tmblr.co/ZLGFVf2EAu2iF",
        "summary": "Deux-tube: continuous combination integration.",
        "recommended_source": null,
        "recommended_color": null,
        "note_count": 0,
        "title": null,
        "body": "<p>Deux-tube: continuous combination integration.</p><figure class=\"tmblr-full\" data-orig-height=\"559\" data-orig-width=\"842\"><img src=\"https://67.media.tumblr.com/e019584ae6ceaa01d61384f416ceca8f/tumblr_inline_og17lkrbAc1uyac0j_540.jpg\" data-orig-height=\"559\" data-orig-width=\"842\"/></figure>",
        "reblog": {
          "tree_html": "",
          "comment": "<p><p>Deux-tube: continuous combination integration.</p><figure class=\"tmblr-full\" data-orig-height=\"559\" data-orig-width=\"842\"><img src=\"https://67.media.tumblr.com/e019584ae6ceaa01d61384f416ceca8f/tumblr_inline_og17lkrbAc1uyac0j_540.jpg\" data-orig-height=\"559\" data-orig-width=\"842\"></figure></p>"
        },
        "trail": [
          {
            "blog": {
              "name": "a3dddog",
              "active": true,
              "theme": {
                "avatar_shape": "square",
                "background_color": "#FAFAFA",
                "body_font": "Helvetica Neue",
                "header_bounds": "",
                "header_image": "https://assets.tumblr.com/images/default_header/optica_pattern_14.png?_v=8c2d3b00544b7efbc4ac06dc3f80e374",
                "header_image_focused": "https://assets.tumblr.com/images/default_header/optica_pattern_14_focused_v3.png?_v=8c2d3b00544b7efbc4ac06dc3f80e374",
                "header_image_scaled": "https://assets.tumblr.com/images/default_header/optica_pattern_14_focused_v3.png?_v=8c2d3b00544b7efbc4ac06dc3f80e374",
                "header_stretch": true,
                "link_color": "#529ECC",
                "show_avatar": true,
                "show_description": true,
                "show_header_image": true,
                "show_title": true,
                "title_color": "#444444",
                "title_font": "Gibson",
                "title_font_weight": "bold"
              },
              "share_likes": true,
              "share_following": true,
              "can_be_followed": true
            },
            "post": {
              "id": "152653802255"
            },
            "content_raw": "<p><p>Deux-tube: continuous combination integration.</p><figure class=\"tmblr-full\" data-orig-height=\"559\" data-orig-width=\"842\"><img src=\"https://67.media.tumblr.com/e019584ae6ceaa01d61384f416ceca8f/tumblr_inline_og17lkrbAc1uyac0j_540.jpg\" data-orig-height=\"559\" data-orig-width=\"842\"></figure></p>",
            "content": "<p><p>Deux-tube: continuous combination integration.</p><figure class=\"tmblr-full\"><img src=\"https://67.media.tumblr.com/e019584ae6ceaa01d61384f416ceca8f/tumblr_inline_og17lkrbAc1uyac0j_540.jpg\" class=\"\"/></figure></p>",
            "is_current_item": true,
            "is_root_item": true
          }
        ],
        "can_like": true,
        "can_reblog": true,
        "can_send_in_message": true,
        "can_reply": false,
        "display_avatar": true,
        "className": ""
      }
    ]
  },
  "alhambra": {
    "projects": [
      {
        "blog_name": "a3dddog",
        "id": 152657258915,
        "post_url": "http://a3dddog.tumblr.com/post/152657258915/alhambra-project-walking-tour",
        "slug": "alhambra-project-walking-tour",
        "type": "text",
        "date": "2016-11-02 21:39:22 GMT",
        "timestamp": 1478122762,
        "state": "published",
        "format": "html",
        "reblog_key": "wUNOQf8d",
        "tags": [
          "alhambra:projects:0",
          "class:title"
        ],
        "short_url": "https://tmblr.co/ZLGFVf2EB5EcZ",
        "summary": "ALHAMBRA PROJECT WALKING TOUR",
        "recommended_source": null,
        "recommended_color": null,
        "note_count": 0,
        "title": null,
        "body": "<p>ALHAMBRA PROJECT WALKING TOUR</p>",
        "reblog": {
          "tree_html": "",
          "comment": "<p>ALHAMBRA PROJECT WALKING TOUR</p>"
        },
        "trail": [
          {
            "blog": {
              "name": "a3dddog",
              "active": true,
              "theme": {
                "avatar_shape": "square",
                "background_color": "#FAFAFA",
                "body_font": "Helvetica Neue",
                "header_bounds": "",
                "header_image": "https://assets.tumblr.com/images/default_header/optica_pattern_14.png?_v=8c2d3b00544b7efbc4ac06dc3f80e374",
                "header_image_focused": "https://assets.tumblr.com/images/default_header/optica_pattern_14_focused_v3.png?_v=8c2d3b00544b7efbc4ac06dc3f80e374",
                "header_image_scaled": "https://assets.tumblr.com/images/default_header/optica_pattern_14_focused_v3.png?_v=8c2d3b00544b7efbc4ac06dc3f80e374",
                "header_stretch": true,
                "link_color": "#529ECC",
                "show_avatar": true,
                "show_description": true,
                "show_header_image": true,
                "show_title": true,
                "title_color": "#444444",
                "title_font": "Gibson",
                "title_font_weight": "bold"
              },
              "share_likes": true,
              "share_following": true,
              "can_be_followed": true
            },
            "post": {
              "id": "152657258915"
            },
            "content_raw": "<p>ALHAMBRA PROJECT WALKING TOUR</p>",
            "content": "<p>ALHAMBRA PROJECT WALKING TOUR</p>",
            "is_current_item": true,
            "is_root_item": true
          }
        ],
        "can_like": true,
        "can_reblog": true,
        "can_send_in_message": true,
        "can_reply": false,
        "display_avatar": true,
        "className": "title"
      },
      {
        "blog_name": "a3dddog",
        "id": 152662531315,
        "post_url": "http://a3dddog.tumblr.com/post/152662531315/play-the-experience-below-by-navigating-the-map-to",
        "slug": "play-the-experience-below-by-navigating-the-map-to",
        "type": "text",
        "date": "2016-11-02 23:55:47 GMT",
        "timestamp": 1478130947,
        "state": "published",
        "format": "html",
        "reblog_key": "Hd8sR4kA",
        "tags": [
          "alhambra:projects:1"
        ],
        "short_url": "https://tmblr.co/ZLGFVf2EBPLpp",
        "summary": "Play the experience below by navigating the map to simulate walking.",
        "recommended_source": null,
        "recommended_color": null,
        "note_count": 0,
        "title": null,
        "body": "<p>Play the experience below by navigating the map to simulate walking.</p>",
        "reblog": {
          "tree_html": "",
          "comment": "<p>Play the experience below by navigating the map to simulate walking.</p>"
        },
        "trail": [
          {
            "blog": {
              "name": "a3dddog",
              "active": true,
              "theme": {
                "avatar_shape": "square",
                "background_color": "#FAFAFA",
                "body_font": "Helvetica Neue",
                "header_bounds": "",
                "header_image": "https://assets.tumblr.com/images/default_header/optica_pattern_14.png?_v=8c2d3b00544b7efbc4ac06dc3f80e374",
                "header_image_focused": "https://assets.tumblr.com/images/default_header/optica_pattern_14_focused_v3.png?_v=8c2d3b00544b7efbc4ac06dc3f80e374",
                "header_image_scaled": "https://assets.tumblr.com/images/default_header/optica_pattern_14_focused_v3.png?_v=8c2d3b00544b7efbc4ac06dc3f80e374",
                "header_stretch": true,
                "link_color": "#529ECC",
                "show_avatar": true,
                "show_description": true,
                "show_header_image": true,
                "show_title": true,
                "title_color": "#444444",
                "title_font": "Gibson",
                "title_font_weight": "bold"
              },
              "share_likes": true,
              "share_following": true,
              "can_be_followed": true
            },
            "post": {
              "id": "152662531315"
            },
            "content_raw": "<p>Play the experience below by navigating the map to simulate walking.</p>",
            "content": "<p>Play the experience below by navigating the map to simulate walking.</p>",
            "is_current_item": true,
            "is_root_item": true
          }
        ],
        "can_like": true,
        "can_reblog": true,
        "can_send_in_message": true,
        "can_reply": false,
        "display_avatar": true,
        "className": ""
      },
      {
        "blog_name": "a3dddog",
        "id": 152660772060,
        "post_url": "http://a3dddog.tumblr.com/post/152660772060/your-browser-does-not-support-iframes",
        "slug": "your-browser-does-not-support-iframes",
        "type": "text",
        "date": "2016-11-02 23:09:53 GMT",
        "timestamp": 1478128193,
        "state": "published",
        "format": "html",
        "reblog_key": "5QuLEBHP",
        "tags": [
          "alhambra:projects:2"
        ],
        "short_url": "https://tmblr.co/ZLGFVf2EBIeJS",
        "summary": "Your browser does not support iframes.",
        "recommended_source": null,
        "recommended_color": null,
        "note_count": 0,
        "title": null,
        "body": "<p><iframe src=\"https://rad.wtf/www/alhambra-web/\" width=\"667\" height=\"375\">\n  <p>Your browser does not support iframes.</p>\n</iframe></p>",
        "reblog": {
          "tree_html": "",
          "comment": "<p><iframe src=\"https://rad.wtf/www/alhambra-web/\" width=\"667\" height=\"375\">\n  <p>Your browser does not support iframes.</p>\n</iframe></p>"
        },
        "trail": [
          {
            "blog": {
              "name": "a3dddog",
              "active": true,
              "theme": {
                "avatar_shape": "square",
                "background_color": "#FAFAFA",
                "body_font": "Helvetica Neue",
                "header_bounds": "",
                "header_image": "https://assets.tumblr.com/images/default_header/optica_pattern_14.png?_v=8c2d3b00544b7efbc4ac06dc3f80e374",
                "header_image_focused": "https://assets.tumblr.com/images/default_header/optica_pattern_14_focused_v3.png?_v=8c2d3b00544b7efbc4ac06dc3f80e374",
                "header_image_scaled": "https://assets.tumblr.com/images/default_header/optica_pattern_14_focused_v3.png?_v=8c2d3b00544b7efbc4ac06dc3f80e374",
                "header_stretch": true,
                "link_color": "#529ECC",
                "show_avatar": true,
                "show_description": true,
                "show_header_image": true,
                "show_title": true,
                "title_color": "#444444",
                "title_font": "Gibson",
                "title_font_weight": "bold"
              },
              "share_likes": true,
              "share_following": true,
              "can_be_followed": true
            },
            "post": {
              "id": "152660772060"
            },
            "content_raw": "<p><iframe src=\"https://rad.wtf/www/alhambra-web/\" width=\"667\" height=\"375\">\n  <p>Your browser does not support iframes.</p>\n</iframe></p>",
            "content": "<p><p><a href=\"#\"><img src=\"https://assets.tumblr.com/images/inline_placeholder.png\" width=\"18\" height=\"14\"/></a></p></p>",
            "is_current_item": true,
            "is_root_item": true
          }
        ],
        "can_like": true,
        "can_reblog": true,
        "can_send_in_message": true,
        "can_reply": false,
        "display_avatar": true,
        "className": ""
      },
      {
        "blog_name": "a3dddog",
        "id": 152663020511,
        "post_url": "http://a3dddog.tumblr.com/post/152663020511",
        "slug": "",
        "type": "video",
        "date": "2016-11-03 00:08:45 GMT",
        "timestamp": 1478131725,
        "state": "published",
        "format": "html",
        "reblog_key": "kYKdDC1t",
        "tags": [
          "alhambra:projects:3"
        ],
        "short_url": "https://tmblr.co/ZLGFVf2EBRDFV",
        "summary": "",
        "recommended_source": null,
        "recommended_color": null,
        "note_count": 0,
        "caption": "",
        "reblog": {
          "tree_html": "",
          "comment": ""
        },
        "trail": [],
        "video_url": "https://vt.tumblr.com/tumblr_og1hqeakJM1vjlpqw.mp4",
        "html5_capable": true,
        "thumbnail_url": "https://31.media.tumblr.com/tumblr_og1hqeakJM1vjlpqw_frame1.jpg",
        "thumbnail_width": 1280,
        "thumbnail_height": 720,
        "duration": 15,
        "player": [
          {
            "width": 250,
            "embed_code": "\n<video  id='embed-581ba8976cb0b948612858' class='crt-video crt-skin-default' width='250' height='141' poster='https://66.media.tumblr.com/tumblr_og1hqeakJM1vjlpqw_smart1.jpg' preload='none' muted data-crt-video data-crt-options='{\"autoheight\":null,\"duration\":15,\"hdUrl\":\"https:\\/\\/api.tumblr.com\\/video_file\\/t:zjfaZQO1NuVCAMhi3wGNWg\\/152663020511\\/tumblr_og1hqeakJM1vjlpqw\",\"filmstrip\":{\"url\":\"https:\\/\\/66.media.tumblr.com\\/previews\\/tumblr_og1hqeakJM1vjlpqw_filmstrip.jpg\",\"width\":\"200\",\"height\":\"112\"}}' >\n    <source src=\"https://api.tumblr.com/video_file/t:zjfaZQO1NuVCAMhi3wGNWg/152663020511/tumblr_og1hqeakJM1vjlpqw/480\" type=\"video/mp4\">\n</video>\n"
          },
          {
            "width": 400,
            "embed_code": "\n<video  id='embed-581ba8976cb0b948612858' class='crt-video crt-skin-default' width='400' height='225' poster='https://66.media.tumblr.com/tumblr_og1hqeakJM1vjlpqw_smart1.jpg' preload='none' muted data-crt-video data-crt-options='{\"autoheight\":null,\"duration\":15,\"hdUrl\":\"https:\\/\\/api.tumblr.com\\/video_file\\/t:zjfaZQO1NuVCAMhi3wGNWg\\/152663020511\\/tumblr_og1hqeakJM1vjlpqw\",\"filmstrip\":{\"url\":\"https:\\/\\/66.media.tumblr.com\\/previews\\/tumblr_og1hqeakJM1vjlpqw_filmstrip.jpg\",\"width\":\"200\",\"height\":\"112\"}}' >\n    <source src=\"https://api.tumblr.com/video_file/t:zjfaZQO1NuVCAMhi3wGNWg/152663020511/tumblr_og1hqeakJM1vjlpqw/480\" type=\"video/mp4\">\n</video>\n"
          },
          {
            "width": 500,
            "embed_code": "\n<video  id='embed-581ba8976cb0b948612858' class='crt-video crt-skin-default' width='500' height='281' poster='https://66.media.tumblr.com/tumblr_og1hqeakJM1vjlpqw_smart1.jpg' preload='none' muted data-crt-video data-crt-options='{\"autoheight\":null,\"duration\":15,\"hdUrl\":\"https:\\/\\/api.tumblr.com\\/video_file\\/t:zjfaZQO1NuVCAMhi3wGNWg\\/152663020511\\/tumblr_og1hqeakJM1vjlpqw\",\"filmstrip\":{\"url\":\"https:\\/\\/66.media.tumblr.com\\/previews\\/tumblr_og1hqeakJM1vjlpqw_filmstrip.jpg\",\"width\":\"200\",\"height\":\"112\"}}' >\n    <source src=\"https://api.tumblr.com/video_file/t:zjfaZQO1NuVCAMhi3wGNWg/152663020511/tumblr_og1hqeakJM1vjlpqw/480\" type=\"video/mp4\">\n</video>\n"
          }
        ],
        "video_type": "tumblr",
        "can_like": true,
        "can_reblog": true,
        "can_send_in_message": true,
        "can_reply": false,
        "display_avatar": true,
        "className": ""
      },
      {
        "blog_name": "a3dddog",
        "id": 152663903615,
        "post_url": "http://a3dddog.tumblr.com/post/152663903615/mobile-web-app-using-geolocation-giving-visitors",
        "slug": "mobile-web-app-using-geolocation-giving-visitors",
        "type": "text",
        "date": "2016-11-03 00:32:10 GMT",
        "timestamp": 1478133130,
        "state": "published",
        "format": "html",
        "reblog_key": "sufq1Acm",
        "tags": [
          "alhambra:projects:4"
        ],
        "short_url": "https://tmblr.co/ZLGFVf2EBUar-",
        "summary": "Mobile web app using geolocation giving visitors augmented proximity to places and stories of within the Russian Hill...",
        "recommended_source": null,
        "recommended_color": null,
        "note_count": 0,
        "title": null,
        "body": "<p>Mobile web app using geolocation giving visitors augmented proximity to places and stories of within the Russian Hill neighbourhood. \nPart of the live event for <a href=\"https://thealhambraproject.com/\" taget=\"_blank\">The Alhambra Project</a> that took place September 30th 2016.</p>",
        "reblog": {
          "tree_html": "",
          "comment": "<p>Mobile web app using geolocation giving visitors augmented proximity to places and stories of within the Russian Hill neighbourhood. \nPart of the live event for <a href=\"https://thealhambraproject.com/\" taget=\"_blank\">The Alhambra Project</a> that took place September 30th 2016.</p>"
        },
        "trail": [
          {
            "blog": {
              "name": "a3dddog",
              "active": true,
              "theme": {
                "avatar_shape": "square",
                "background_color": "#FAFAFA",
                "body_font": "Helvetica Neue",
                "header_bounds": "",
                "header_image": "https://assets.tumblr.com/images/default_header/optica_pattern_14.png?_v=8c2d3b00544b7efbc4ac06dc3f80e374",
                "header_image_focused": "https://assets.tumblr.com/images/default_header/optica_pattern_14_focused_v3.png?_v=8c2d3b00544b7efbc4ac06dc3f80e374",
                "header_image_scaled": "https://assets.tumblr.com/images/default_header/optica_pattern_14_focused_v3.png?_v=8c2d3b00544b7efbc4ac06dc3f80e374",
                "header_stretch": true,
                "link_color": "#529ECC",
                "show_avatar": true,
                "show_description": true,
                "show_header_image": true,
                "show_title": true,
                "title_color": "#444444",
                "title_font": "Gibson",
                "title_font_weight": "bold"
              },
              "share_likes": true,
              "share_following": true,
              "can_be_followed": true
            },
            "post": {
              "id": "152663903615"
            },
            "content_raw": "<p>Mobile web app using geolocation giving visitors augmented proximity to places and stories of within the Russian Hill neighbourhood. \nPart of the live event for <a href=\"https://thealhambraproject.com/\" taget=\"_blank\">The Alhambra Project</a> that took place September 30th 2016.</p>",
            "content": "<p>Mobile web app using geolocation giving visitors augmented proximity to places and stories of within the Russian Hill neighbourhood. \nPart of the live event for <a href=\"https://thealhambraproject.com/\">The Alhambra Project</a> that took place September 30th 2016.</p>",
            "is_current_item": true,
            "is_root_item": true
          }
        ],
        "can_like": true,
        "can_reblog": true,
        "can_send_in_message": true,
        "can_reply": false,
        "display_avatar": true,
        "className": ""
      },
      {
        "blog_name": "a3dddog",
        "id": 152658047750,
        "post_url": "http://a3dddog.tumblr.com/post/152658047750/folks-could-navigate-between-locations-with-the",
        "slug": "folks-could-navigate-between-locations-with-the",
        "type": "photo",
        "date": "2016-11-02 22:00:02 GMT",
        "timestamp": 1478124002,
        "state": "published",
        "format": "html",
        "reblog_key": "UW7UdYrQ",
        "tags": [
          "alhambra:projects"
        ],
        "short_url": "https://tmblr.co/ZLGFVf2EB8FC6",
        "summary": "Folks could navigate between locations with the help of a map and compass.",
        "recommended_source": null,
        "recommended_color": null,
        "note_count": 0,
        "caption": "<p>Folks could navigate between locations with the help of a map and compass.</p>",
        "reblog": {
          "tree_html": "",
          "comment": "<p>Folks could navigate between locations with the help of a map and compass.</p>"
        },
        "trail": [
          {
            "blog": {
              "name": "a3dddog",
              "active": true,
              "theme": {
                "avatar_shape": "square",
                "background_color": "#FAFAFA",
                "body_font": "Helvetica Neue",
                "header_bounds": "",
                "header_image": "https://assets.tumblr.com/images/default_header/optica_pattern_14.png?_v=8c2d3b00544b7efbc4ac06dc3f80e374",
                "header_image_focused": "https://assets.tumblr.com/images/default_header/optica_pattern_14_focused_v3.png?_v=8c2d3b00544b7efbc4ac06dc3f80e374",
                "header_image_scaled": "https://assets.tumblr.com/images/default_header/optica_pattern_14_focused_v3.png?_v=8c2d3b00544b7efbc4ac06dc3f80e374",
                "header_stretch": true,
                "link_color": "#529ECC",
                "show_avatar": true,
                "show_description": true,
                "show_header_image": true,
                "show_title": true,
                "title_color": "#444444",
                "title_font": "Gibson",
                "title_font_weight": "bold"
              },
              "share_likes": true,
              "share_following": true,
              "can_be_followed": true
            },
            "post": {
              "id": "152658047750"
            },
            "content_raw": "<p>Folks could navigate between locations with the help of a map and compass.</p>",
            "content": "<p>Folks could navigate between locations with the help of a map and compass.</p>",
            "is_current_item": true,
            "is_root_item": true
          }
        ],
        "image_permalink": "http://a3dddog.tumblr.com/image/152658047750",
        "photos": [
          {
            "caption": "",
            "alt_sizes": [
              {
                "url": "https://65.media.tumblr.com/a491ee8426b51905bb204fddf6563968/tumblr_og1bs2sUhA1vjlpqwo1_1280.jpg",
                "width": 1280,
                "height": 853
              },
              {
                "url": "https://67.media.tumblr.com/a491ee8426b51905bb204fddf6563968/tumblr_og1bs2sUhA1vjlpqwo1_500.jpg",
                "width": 500,
                "height": 333
              },
              {
                "url": "https://67.media.tumblr.com/a491ee8426b51905bb204fddf6563968/tumblr_og1bs2sUhA1vjlpqwo1_400.jpg",
                "width": 400,
                "height": 267
              },
              {
                "url": "https://66.media.tumblr.com/a491ee8426b51905bb204fddf6563968/tumblr_og1bs2sUhA1vjlpqwo1_250.jpg",
                "width": 250,
                "height": 167
              },
              {
                "url": "https://65.media.tumblr.com/a491ee8426b51905bb204fddf6563968/tumblr_og1bs2sUhA1vjlpqwo1_100.jpg",
                "width": 100,
                "height": 67
              },
              {
                "url": "https://67.media.tumblr.com/a491ee8426b51905bb204fddf6563968/tumblr_og1bs2sUhA1vjlpqwo1_75sq.jpg",
                "width": 75,
                "height": 75
              }
            ],
            "original_size": {
              "url": "https://65.media.tumblr.com/a491ee8426b51905bb204fddf6563968/tumblr_og1bs2sUhA1vjlpqwo1_1280.jpg",
              "width": 1280,
              "height": 853
            },
            "exif": {
              "Camera": "Canon EOS 5D Mark III",
              "ISO": 20000,
              "Aperture": "f/4",
              "Exposure": "1/60th",
              "FocalLength": "25mm"
            }
          }
        ],
        "can_like": true,
        "can_reblog": true,
        "can_send_in_message": true,
        "can_reply": false,
        "display_avatar": true,
        "className": ""
      },
      {
        "blog_name": "a3dddog",
        "id": 152658032895,
        "post_url": "http://a3dddog.tumblr.com/post/152658032895",
        "slug": "",
        "type": "photo",
        "date": "2016-11-02 21:59:39 GMT",
        "timestamp": 1478123979,
        "state": "published",
        "format": "html",
        "reblog_key": "ZNs4u66M",
        "tags": [
          "alhambra:projects"
        ],
        "short_url": "https://tmblr.co/ZLGFVf2EB8BZ-",
        "summary": "",
        "recommended_source": null,
        "recommended_color": null,
        "note_count": 0,
        "caption": "",
        "reblog": {
          "tree_html": "",
          "comment": ""
        },
        "trail": [],
        "image_permalink": "http://a3dddog.tumblr.com/image/152658032895",
        "photos": [
          {
            "caption": "",
            "alt_sizes": [
              {
                "url": "https://67.media.tumblr.com/b65dc2b2889d1bf389354a9038962fc0/tumblr_og1brfZJpQ1vjlpqwo1_1280.jpg",
                "width": 1280,
                "height": 853
              },
              {
                "url": "https://66.media.tumblr.com/b65dc2b2889d1bf389354a9038962fc0/tumblr_og1brfZJpQ1vjlpqwo1_500.jpg",
                "width": 500,
                "height": 333
              },
              {
                "url": "https://65.media.tumblr.com/b65dc2b2889d1bf389354a9038962fc0/tumblr_og1brfZJpQ1vjlpqwo1_400.jpg",
                "width": 400,
                "height": 267
              },
              {
                "url": "https://67.media.tumblr.com/b65dc2b2889d1bf389354a9038962fc0/tumblr_og1brfZJpQ1vjlpqwo1_250.jpg",
                "width": 250,
                "height": 167
              },
              {
                "url": "https://67.media.tumblr.com/b65dc2b2889d1bf389354a9038962fc0/tumblr_og1brfZJpQ1vjlpqwo1_100.jpg",
                "width": 100,
                "height": 67
              },
              {
                "url": "https://66.media.tumblr.com/b65dc2b2889d1bf389354a9038962fc0/tumblr_og1brfZJpQ1vjlpqwo1_75sq.jpg",
                "width": 75,
                "height": 75
              }
            ],
            "original_size": {
              "url": "https://67.media.tumblr.com/b65dc2b2889d1bf389354a9038962fc0/tumblr_og1brfZJpQ1vjlpqwo1_1280.jpg",
              "width": 1280,
              "height": 853
            },
            "exif": {
              "Camera": "Canon EOS 5D Mark III",
              "ISO": 6400,
              "Aperture": "f/6.3",
              "Exposure": "1/30th",
              "FocalLength": "25mm"
            }
          }
        ],
        "can_like": true,
        "can_reblog": true,
        "can_send_in_message": true,
        "can_reply": false,
        "display_avatar": true,
        "className": ""
      }
    ],
    "home": [
      {
        "blog_name": "a3dddog",
        "id": 152654154390,
        "post_url": "http://a3dddog.tumblr.com/post/152654154390/alhambra-walking-tour-mobile-exploration-of",
        "slug": "alhambra-walking-tour-mobile-exploration-of",
        "type": "text",
        "date": "2016-11-02 20:19:03 GMT",
        "timestamp": 1478117943,
        "state": "published",
        "format": "html",
        "reblog_key": "fWoAqxqp",
        "tags": [
          "alhambra:home:0"
        ],
        "short_url": "https://tmblr.co/ZLGFVf2EAvOgM",
        "summary": "Alhambra walking tour: mobile exploration of constructed physical and digital spaces.",
        "recommended_source": null,
        "recommended_color": null,
        "note_count": 0,
        "title": null,
        "body": "<p>Alhambra walking tour: mobile exploration of constructed physical and digital spaces.</p><figure data-orig-width=\"842\" data-orig-height=\"559\" class=\"tmblr-full\"><img src=\"https://67.media.tumblr.com/b3dd1c6f3b3be7c5690041ca85c03fdf/tumblr_inline_og173mTkFV1uyac0j_540.jpg\" data-orig-width=\"842\" data-orig-height=\"559\"/></figure>",
        "reblog": {
          "tree_html": "",
          "comment": "<p><p>Alhambra walking tour: mobile exploration of constructed physical and digital spaces.</p><figure data-orig-width=\"842\" data-orig-height=\"559\" class=\"tmblr-full\"><img src=\"https://67.media.tumblr.com/b3dd1c6f3b3be7c5690041ca85c03fdf/tumblr_inline_og173mTkFV1uyac0j_540.jpg\" data-orig-width=\"842\" data-orig-height=\"559\"></figure></p>"
        },
        "trail": [
          {
            "blog": {
              "name": "a3dddog",
              "active": true,
              "theme": {
                "avatar_shape": "square",
                "background_color": "#FAFAFA",
                "body_font": "Helvetica Neue",
                "header_bounds": "",
                "header_image": "https://assets.tumblr.com/images/default_header/optica_pattern_14.png?_v=8c2d3b00544b7efbc4ac06dc3f80e374",
                "header_image_focused": "https://assets.tumblr.com/images/default_header/optica_pattern_14_focused_v3.png?_v=8c2d3b00544b7efbc4ac06dc3f80e374",
                "header_image_scaled": "https://assets.tumblr.com/images/default_header/optica_pattern_14_focused_v3.png?_v=8c2d3b00544b7efbc4ac06dc3f80e374",
                "header_stretch": true,
                "link_color": "#529ECC",
                "show_avatar": true,
                "show_description": true,
                "show_header_image": true,
                "show_title": true,
                "title_color": "#444444",
                "title_font": "Gibson",
                "title_font_weight": "bold"
              },
              "share_likes": true,
              "share_following": true,
              "can_be_followed": true
            },
            "post": {
              "id": "152654154390"
            },
            "content_raw": "<p><p>Alhambra walking tour: mobile exploration of constructed physical and digital spaces.</p><figure data-orig-width=\"842\" data-orig-height=\"559\" class=\"tmblr-full\"><img src=\"https://67.media.tumblr.com/b3dd1c6f3b3be7c5690041ca85c03fdf/tumblr_inline_og173mTkFV1uyac0j_540.jpg\" data-orig-width=\"842\" data-orig-height=\"559\"></figure></p>",
            "content": "<p><p>Alhambra walking tour: mobile exploration of constructed physical and digital spaces.</p><figure class=\"tmblr-full\"><img src=\"https://67.media.tumblr.com/b3dd1c6f3b3be7c5690041ca85c03fdf/tumblr_inline_og173mTkFV1uyac0j_540.jpg\" class=\"\"/></figure></p>",
            "is_current_item": true,
            "is_root_item": true
          }
        ],
        "can_like": true,
        "can_reblog": true,
        "can_send_in_message": true,
        "can_reply": false,
        "display_avatar": true,
        "className": ""
      },
      {
        "blog_name": "a3dddog",
        "id": 152648305955,
        "post_url": "http://a3dddog.tumblr.com/post/152648305955/play-the-experience-by-clicking-on-the-map-to",
        "slug": "play-the-experience-by-clicking-on-the-map-to",
        "type": "text",
        "date": "2016-11-02 17:33:20 GMT",
        "timestamp": 1478108000,
        "state": "published",
        "format": "html",
        "reblog_key": "Vlush4CM",
        "tags": [
          "alhambra:home:1"
        ],
        "short_url": "https://tmblr.co/ZLGFVf2EAZ4qZ",
        "summary": "Play the experience by clicking on the map to simulate walking.",
        "recommended_source": null,
        "recommended_color": null,
        "note_count": 0,
        "title": null,
        "body": "<p>Play the experience by clicking on the map to simulate walking.</p>",
        "reblog": {
          "tree_html": "",
          "comment": "<p>Play the experience by clicking on the map to simulate walking.</p>"
        },
        "trail": [
          {
            "blog": {
              "name": "a3dddog",
              "active": true,
              "theme": {
                "avatar_shape": "square",
                "background_color": "#FAFAFA",
                "body_font": "Helvetica Neue",
                "header_bounds": "",
                "header_image": "https://assets.tumblr.com/images/default_header/optica_pattern_14.png?_v=8c2d3b00544b7efbc4ac06dc3f80e374",
                "header_image_focused": "https://assets.tumblr.com/images/default_header/optica_pattern_14_focused_v3.png?_v=8c2d3b00544b7efbc4ac06dc3f80e374",
                "header_image_scaled": "https://assets.tumblr.com/images/default_header/optica_pattern_14_focused_v3.png?_v=8c2d3b00544b7efbc4ac06dc3f80e374",
                "header_stretch": true,
                "link_color": "#529ECC",
                "show_avatar": true,
                "show_description": true,
                "show_header_image": true,
                "show_title": true,
                "title_color": "#444444",
                "title_font": "Gibson",
                "title_font_weight": "bold"
              },
              "share_likes": true,
              "share_following": true,
              "can_be_followed": true
            },
            "post": {
              "id": "152648305955"
            },
            "content_raw": "<p>Play the experience by clicking on the map to simulate walking.</p>",
            "content": "<p>Play the experience by clicking on the map to simulate walking.</p>",
            "is_current_item": true,
            "is_root_item": true
          }
        ],
        "can_like": true,
        "can_reblog": true,
        "can_send_in_message": true,
        "can_reply": false,
        "display_avatar": true,
        "className": ""
      }
    ]
  }
}
```





