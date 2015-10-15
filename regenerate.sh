#!/bin/bash
cd server
rm db/*.db
bundle exec padrino rake db:create db:migrate db:seed -e production
bundle exec padrino start -e production -h 0.0.0.0