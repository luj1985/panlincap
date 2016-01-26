class Menu < ActiveRecord::Base
  def to_localized lang
    if lang == 'en' then
      {
        :id => self.id,
        :title => self.title_en,
        :parent => self.parent,
        :link => self.link
      }
    else
      {
        :id => self.id,
        :title => self.title,
        :parent => self.parent,
        :link => self.link
      }
    end
  end

end
