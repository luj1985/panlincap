working_directory "/var/www/panlincap/panlincap"

pid "/var/www/panlincap/panlincap/pids/unicorn.pid"

stderr_path "/var/www/panlincap/panlincap/log/unicorn.err.log"
stdout_path "/var/www/panlincap/panlincap/log/unicorn.out.log"

listen "/tmp/unicorn.panlincap.sock"

worker_processes 2

timeout 30