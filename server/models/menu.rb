class Menu < ActiveRecord::Base
  def to_localized lang
    if lang == 'en' then
      {
        :id => self.id,
        :title => self.title_en,
        :parent => self.parent,
        :link => self.link,
        :param => self.param
      }
    else
      {
        :id => self.id,
        :title => self.title,
        :parent => self.parent,
        :link => self.link,
        :param => self.param
      }
    end
  end

end
