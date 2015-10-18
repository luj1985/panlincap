class CreateSettings < ActiveRecord::Migration
  def self.up
    create_table :settings do |t|
      t.string :name
      t.string :value
      t.text :description
      t.timestamps
    end

    Setting.create(:name => 'delay', :value => "5000", :description => "首页背景图切换时间")
    Setting.create(:name => 'title', :value => "磐霖资本", :description => "网页标题")
    Setting.create(:name => 'description', :value => "秉承“投行创造价值”的理念，磐霖资本组建了在专业技能和行业资源上高度互补的投资管理团队，在资本市场合计具有超过100年的专业服务与投资管理经验，并以中国创业板首批上市的成功退出案例名列人民币PE基金市场领域内的前列。咨询电话：021-61652500", :description => "网站描述")
    Setting.create(:name => 'keyword', :value => "磐霖资本，上海磐霖投资管理有限公司,上海投资公司,投资管理公司,投资管理有限公司", :description => "网站关键字，用于搜索引擎抓取")
  end

  def self.down
    drop_table :settings
  end
end
