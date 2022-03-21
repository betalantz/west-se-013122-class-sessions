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

ActiveRecord::Schema.define(version: 2022_03_21_165726) do

  create_table "auditions", force: :cascade do |t|
    t.string "actor"
    t.string "location"
    t.integer "phone"
    t.boolean "hired", default: false
    t.integer "role_id"
    t.index ["role_id"], name: "index_auditions_on_role_id"
  end

  create_table "roles", force: :cascade do |t|
    t.string "character_name"
  end

end
