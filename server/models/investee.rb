class Investee < ActiveRecord::Base
  belongs_to :invest_area



  def to_localized lang
    if lang == 'en' then
      {
        :id => self.id,
        :name => self.name,
        :brief => self.brief_en,
        :description => self.description_en,
        :website => self.website,
        :logo => self.logo,
        :order => self.order,
        :area => self.invest_area.name_en
      }
    else
      {
        :id => self.id,
        :name => self.name,
        :brief => self.brief,
        :description => self.description,
        :website => self.website,
        :logo => self.logo,
        :order => self.order,
        :area => self.invest_area.name
      }
    end
  end
end
