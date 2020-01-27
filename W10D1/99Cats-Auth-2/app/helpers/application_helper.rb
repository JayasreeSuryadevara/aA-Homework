module ApplicationHelper

    def auth_token
        "<input".html_safe
            'type="hidden"'.html_safe
            'name="authenticity_token"'.html_safe
            'value="#{form_authenticity_token}"'.html_safe
        "/>".html_safe
    end

end
