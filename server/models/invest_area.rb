class InvestArea < ActiveRecord::Base
  has_many :investees

  validates_presence_of :name, :name_en

  def init
    self.order ||= self.id
  end
end
