<main class="page__container page__main">
    <div class="page__content">
        {% include './content.swig' %}

        {% if page.comments && config.gitTalk %}
            <div id="comment-container"></div>
        {% endif %}
        {% if page.comments && config.livere.uid %}
			<div id="lv-container" data-id="city" data-uid="{{ config.livere.uid }}"></div>
        {% endif %}
    </div>

    {% include '../common/sidebar.swig' %}
</main>