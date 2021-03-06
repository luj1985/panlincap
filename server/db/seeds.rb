# Seed add you the ability to populate your db.
# We provide you a basic shell for interaction with the end user.
# So try some code like below:
#
#   name = shell.ask("What's your name?")
#   shell.say name
#

require 'csv'
require 'date'

reader = CSV.open(File.join(File.dirname(__FILE__), "news.csv"), "r") 
reader.shift # ignore header

reader.each do |article|
  id, category, title, _, date, author, content, keyword, count = article 
  timestamp = Date.strptime(date, "%m/%d/%y %H:%M:%S") 
  Article.create(
    :title => title, :body => content, :keyword => keyword,
    :author_id => author, :category_id => category, 
    :created_at => timestamp, :count => count.to_i)
end








reader = CSV.open(File.join(File.dirname(__FILE__), "investees.csv"), "r") 
reader.shift # ignore header

reader.each do |line|
  name, brief, area, website, logo, description = line
  Investee.create(:name => name, :brief => brief, :area => area, :website => website, :logo => logo, :description => description)
end







reader = CSV.open(File.join(File.dirname(__FILE__), "menus.csv"), "r") 
reader.shift

reader.each do |line|
  id, text, link, parent = line
  Menu.create(:id => id, :title => text, :link => link, :parent => parent)
end





reader = CSV.open(File.join(File.dirname(__FILE__), "founds.csv"), "r") 
reader.shift

reader.each do |line|
  issue,name,status,period,company,portfolio = line
  Found.create(:issue => issue, :name => name, :status => status, :period => period, :company => company, :portfolio => portfolio)
end






reader = CSV.open(File.join(File.dirname(__FILE__), "members.csv"), "r") 
reader.shift

reader.each do |line|
  name, suffix, position, title, avatar, description = line
  Member.create(:name => name, :suffix => suffix, :position => position, :title => title, :avatar => avatar, :description => description)
end



reader = CSV.open(File.join(File.dirname(__FILE__), "declarations.csv"), "r") 
reader.shift

reader.each do |line|
  name, title, body = line
  Declaration.create(:name => name, :title => title, :body => body)
end



email     = shell.ask "Which email do you want use for logging into admin?"
password  = shell.ask "Tell me the password to use:"

shell.say ""

account = Account.create(:email => email, :name => "Foo", :surname => "Bar", :password => password, :password_confirmation => password, :role => "admin")

if account.valid?
  shell.say "================================================================="
  shell.say "Account has been successfully created, now you can login with:"
  shell.say "================================================================="
  shell.say "   email: #{email}"
  shell.say "   password: #{password}"
  shell.say "================================================================="
else
  shell.say "Sorry but some thing went wrong!"
  shell.say ""
  account.errors.full_messages.each { |m| shell.say "   - #{m}" }
end

shell.say ""
