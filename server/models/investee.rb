class Investee < ActiveRecord::Base
  belongs_to :invest_area
  before_create :create_order

  def to_localized lang
    if lang == 'en' then
      {
        :id => self.id,
        :name => (self.name_en.blank? ? self.name : self.name_en),
        :brief => (self.brief_en.blank? ? self.brief : self.brief_en),
        :description => (self.description_en.blank? ? self.description : self.description_en),
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

private
  def create_order
    max = Investee.maximum("order") || 0
    self.order = max + 1
  end
end
