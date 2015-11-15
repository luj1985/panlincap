# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 15) do

  create_table "accounts", force: :cascade do |t|
    t.string   "name"
    t.string   "surname"
    t.string   "email"
    t.string   "crypted_password"
    t.string   "role"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "articles", force: :cascade do |t|
    t.string   "title"
    t.text     "body"
    t.string   "keyword"
    t.integer  "author_id"
    t.integer  "category_id"
    t.integer  "count"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "attop"
    t.integer  "priority"
  end

  create_table "categories", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "declarations", force: :cascade do |t|
    t.string   "name"
    t.string   "title"
    t.text     "body"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "founds", force: :cascade do |t|
    t.string   "issue"
    t.string   "name"
    t.string   "status"
    t.string   "period"
    t.string   "company"
    t.string   "portfolio"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "fullname"
  end

  create_table "investees", force: :cascade do |t|
    t.string   "name"
    t.string   "brief"
    t.string   "area"
    t.string   "website"
    t.string   "logo"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "members", force: :cascade do |t|
    t.string   "name"
    t.string   "suffix"
    t.string   "position"
    t.string   "title"
    t.string   "avatar"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "priority"
  end

  create_table "menus", force: :cascade do |t|
    t.string   "title"
    t.string   "link"
    t.integer  "parent"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "param"
  end

  create_table "settings", force: :cascade do |t|
    t.string   "name"
    t.string   "value"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
