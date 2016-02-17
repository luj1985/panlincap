class InvestArea < ActiveRecord::Base
  has_many :investees
  validates_presence_of :name, :name_en
  before_create :create_order

private
  def create_order
    max = InvestArea.maximum("order") || 0
    self.order = max + 1
  end
end
