class Article < ActiveRecord::Base
  self.per_page = 10

  after_initialize :init
  
  validates_presence_of :title, :body

  def init
    self.count ||= 0
    self.attop ||= false
    self.priority ||= 1
  end
end
