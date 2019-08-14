{% if page.comments && config.gitTalk %}
    <link rel="stylesheet" href="https://unpkg.com/gitalk/dist/gitalk.css">
    <script src="https://unpkg.com/gitalk/dist/gitalk.min.js"></script>
    <script src="/js/md5.min.js"></script>

    <script>
        var tags = [{% for tag in page.tags %}'{{ tag.name }}', {% endfor %}];

        var gitalk = new Gitalk({
            clientID: '{{ config.gitTalk.clientId }}',
            clientSecret: '{{ config.gitTalk.clientSecret }}',
            repo: '{{ config.gitTalk.repo }}',
            owner: '{{ config.gitTalk.owner }}',
            admin: [{% for item in config.gitTalk.admin %}'{{ item }}', {% endfor %}],
            labels: tags,
            id: (new Date({{ page.date }})).getTime() > (new Date('2018-02-15')).getTime() ? md5(location.href) : location.href
        });

        gitalk.render('comment-container');
    </script>
{% endif %}

{% if page.comments && config.livere.uid %}
	<script type="text/javascript">
		(function(d, s) {
			var j, e = d.getElementsByTagName(s)[0];

			if (typeof LivereTower === 'function') { return; }

			j = d.createElement(s);
			j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
			j.async = true;

			e.parentNode.insertBefore(j, e);
		})(document, 'script');
	</script>
	<noscript>为正常使用来必力评论功能请激活JavaScript</noscript>
{% endif %}
