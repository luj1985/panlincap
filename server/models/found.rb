class Found < ActiveRecord::Base

  validates_presence_of :issue, :name
  validates_presence_of :issue_en, :name_en

  def to_localized lang
    if lang == 'en' then
      {
        :id => self.id,
        :issue => self.issue_en,
        :name => self.name_en,
        :status => self.status_en,
        :period => self.period_en,
        :company => self.company_en,
        :portfolio => self.portfolio_en,
        :fullname => self.fullname_en
      }
    else
      {
        :id => self.id,
        :issue => self.issue,
        :name => self.name,
        :status => self.status,
        :period => self.period,
        :company => self.company,
        :portfolio => self.portfolio,
        :fullname => self.fullname
      }
    end
  end
end
