working_directory "/var/www/panlincap"

pid "/var/www/panlincap/pids/unicorn.pid"

stderr_path "/var/www/panlincap/log/unicorn.err.log"
stdout_path "/var/www/panlincap/log/unicorn.out.log"

listen "/tmp/unicorn.panlincap.sock"

worker_processes 1

timeout 30