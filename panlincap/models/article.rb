class Article < ActiveRecord::Base
  self.per_page = 10

  after_initialize :init

  def init
    self.count ||= 0
  end
end
