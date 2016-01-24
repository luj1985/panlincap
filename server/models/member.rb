class Member < ActiveRecord::Base
  after_initialize :init

  def init
    self.priority ||= self.id
  end


  def to_localized lang
    if lang == 'en' then
      model = {
        :id => self.id,
        :avatar => self.avatar,
        :name => (self.name_en || self.name),
        :title => (self.title_en || self.title),
        :description => (self.description_en || self.description),
        :suffix => self.suffix,
        :position => self.position
      }
    else 
      model = {
        :id => self.id,
        :avatar => self.avatar,
        :name => self.name,
        :title => self.title,
        :description => self.description,
        :suffix => self.suffix,
        :position => self.position
      }
    end
    model
  end
end
