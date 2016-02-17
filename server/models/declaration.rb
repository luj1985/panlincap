class Declaration < ActiveRecord::Base

  def to_localized lang
    if lang == 'en' then
      {
        :id => self.id,
        :name => self.name,
        :title => (self.title_en.blank? ? self.title : self.title_en),
        :body => (self.body_en.blank? ? self.body : self.body_en)
      }
    else
      {
        :id => self.id,
        :name => self.name,
        :title => self.title,
        :body => self.body
      }
    end
  end
end
