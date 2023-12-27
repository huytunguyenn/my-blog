"use strict";(self.webpackChunktu_website=self.webpackChunktu_website||[]).push([[4949],{3585:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var r=s(5893),l=s(1151);const t={sidebar_position:2},a="Set up SonarQube server",o={id:"learn/utils/sonarqube/install",title:"Set up SonarQube server",description:"This guide will help you install and running SonarQube service on Ubuntu server.",source:"@site/docs/learn/utils/sonarqube/install.mdx",sourceDirName:"learn/utils/sonarqube",slug:"/learn/utils/sonarqube/install",permalink:"/my-blog/vi/docs/learn/utils/sonarqube/install",draft:!1,unlisted:!1,editUrl:"https://github.com/huytunguyenn/my-blog/tree/main/docs/learn/utils/sonarqube/install.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"What is SonarQube?",permalink:"/my-blog/vi/docs/learn/utils/sonarqube/intro"}},i={},c=[];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"set-up-sonarqube-server",children:"Set up SonarQube server"}),"\n",(0,r.jsx)(n.p,{children:"This guide will help you install and running SonarQube service on Ubuntu server."}),"\n",(0,r.jsxs)(n.p,{children:["1\ufe0f\u20e3 Ask IT to provide an Ubuntu server. Here\u2019s using ",(0,r.jsx)(n.strong,{children:"Ubuntu 20.04.5 LTS"})," with the credentials."]}),"\n",(0,r.jsx)(n.p,{children:"2\ufe0f\u20e3 Connect to company VPN (if needed)."}),"\n",(0,r.jsx)(n.p,{children:"3\ufe0f\u20e3 Open shell, log in to the server using SSH session:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ ssh leverege@192.168.59.151\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Enter the password if it asks for."})}),"\n",(0,r.jsxs)(n.p,{children:["4\ufe0f\u20e3 One of the ",(0,r.jsx)(n.a,{href:"https://docs.sonarqube.org/latest/requirements/requirements/",children:"prerequisites"})," is to install Java:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ sudo apt-get -y update\n$ sudo apt-get install openjdk-11-jdk\n"})}),"\n",(0,r.jsxs)(n.p,{children:["5\ufe0f\u20e3 We need to install database, here\u2019s using ",(0,r.jsx)(n.a,{href:"https://www.postgresql.org/download/linux/ubuntu/",children:"PostgreSQL"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ sudo sh -c 'echo \"deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main\" > /etc/apt/sources.list.d/pgdg.list'\n$ wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -\n$ sudo apt-get update\n$ sudo apt-get -y install postgresql\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then we need to configure Postgres:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ sudo passwd postgres\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then we create user sonar for SonarQube and log in to shell:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ sudo su - postgres\n$ createuser sonar\n"})}),"\n",(0,r.jsx)(n.p,{children:"Enter the psql shell:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ psql\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now, we\u2019re set password for the user, create database with sonar user as owner and grant all the rights to that user:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"ALTER USER sonar WITH ENCRYPTED PASSWORD 'admin';\nCREATE DATABASE sonarqube OWNER sonar;\nGRANT ALL PRIVILEGES ON DATABASE sonarqube to sonar;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Exit psql shell and Postgres shell."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"\\q\n$ exit\n"})}),"\n",(0,r.jsx)(n.p,{children:"Restart the server."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ systemctl restart postgresql\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["If the prompt ask to authenticate, choose the ",(0,r.jsx)(n.code,{children:"leverege"})," identity and enter password, for example:"]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"Multiple identities can be used for authentication:\n 1.  SGH719TRJY (leverege)\n 2.  ,,, (kmsadmin)\nChoose identity to authenticate as (1-2): 1\nPassword: \ud83d\udd11\n"})}),"\n",(0,r.jsx)(n.p,{children:"Check service\u2019s status:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ systemctl status postgresql\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Make sure something like this appears: ",(0,r.jsx)(n.em,{children:'"...PostgreSQL RDBMS ... Ative: active (exited)"'}),". You can also install ",(0,r.jsx)(n.code,{children:"net-tools"})," package to check:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ sudo apt install net-tools\n$ sudo netstat -tlpn\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can see the IP and port that service is running on."}),"\n",(0,r.jsxs)(n.p,{children:["6\ufe0f\u20e3 Next, we\u2019re going to ",(0,r.jsx)(n.a,{href:"https://docs.sonarqube.org/latest/requirements/requirements/",children:"set up the system limits & kernel parameters"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Edit ",(0,r.jsx)(n.code,{children:"sysctl.conf"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ sudo nano /etc/sysctl.conf\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Add these at the end of the file, under 2 line of ",(0,r.jsx)(n.em,{children:"\u201c#kernel.sysrq=438\u201d"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"vm.max_map_count=262144\nfs.file-max=65536\nulimit -n 65536\nulimit -u 4096\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Press ^X, Y then enter."})}),"\n",(0,r.jsxs)(n.p,{children:["Edit ",(0,r.jsx)(n.code,{children:"limits.conf"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ nano /etc/security/limits.conf\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Add these at the end of the file, under the line ",(0,r.jsx)(n.em,{children:"\u201c# End of file\u201d"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sonarqube   -   nofile   65536\nsonarqube   -   nproc    4096\n"})}),"\n",(0,r.jsx)(n.p,{children:"Reboot server."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ reboot\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"If above is not working, use:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ systemctl reboot -i\n"})}),"\n",(0,r.jsx)(n.p,{children:"7\ufe0f\u20e3 Install and configure SonarQube:"}),"\n",(0,r.jsxs)(n.p,{children:["7\ufe0f\u20e3.1\ufe0f\u20e3 First, log in again to the server like step 3\ufe0f\u20e3. Then, download the SonarQube zip file from ",(0,r.jsx)(n.a,{href:"https://binaries.sonarsource.com/?prefix=Distribution/sonarqube/",children:"here"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ cd /opt/\n$ sudo curl -L -O https://binaries.sonarsource.com/Distribution/sonarqube/sonarqube-9.7.1.62043.zip\n"})}),"\n",(0,r.jsx)(n.p,{children:"Unzip the file (you might need to install unzip) and rename destination folder:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ sudo apt install unzip\n$ sudo unzip sonarqube-9.7.1.62043.zip\n$ sudo rm -rf sonarqube-9.7.1.62043.zip\n$ sudo mv sonarqube-9.7.1.62043/ sonarqube\n"})}),"\n",(0,r.jsx)(n.p,{children:"7\ufe0f\u20e3.2\ufe0f\u20e3 Set up SonarQube properties:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ sudo nano sonarqube/conf/sonar.properties\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Go to the line ",(0,r.jsx)(n.em,{children:"\u201c# The schema must be created first.\u201d"}),", uncomment 2 lines below and add:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sonar.jdbc.username=sonar\nsonar.jdbc.password=admin\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Change Postgres schema: under the line ",(0,r.jsx)(n.em,{children:"\u201c# By default the schema named \u201cpublic\u201d is used. It can be \u2026\u201d"}),", uncomment and remove ",(0,r.jsx)(n.em,{children:"\u201c?currentSchema=my_schema\u201d"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Go to ",(0,r.jsx)(n.em,{children:"\u201cELASTICSEARCH\u201d"})," section, uncomment line below the line ",(0,r.jsx)(n.em,{children:"\u201c# JVM options of Elasticsearch process\u201d"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Save changes and exit nano by ^X, Y then enter."}),"\n",(0,r.jsxs)(n.p,{children:["7\ufe0f\u20e3.3\ufe0f\u20e3 Now, we\u2019re creating SonarQube service: create the ",(0,r.jsx)(n.code,{children:"sonarqube.service"})," file"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ sudo nano /etc/systemd/system/sonarqube.service\n"})}),"\n",(0,r.jsx)(n.p,{children:"based on the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"[Unit]\nDescription=SonarQube service\nAfter=syslog.target network.target\n\n[Service]\nType=forking\n\nExecStart=/opt/sonarqube/bin/linux-x86-64/sonar.sh start\nExecStop=/opt/sonarqube/bin/linux-x86-64/sonar.sh stop\n\nUser=sonar\nGroup=sonar\nRestart=always\n\nLimitNOFILE=65536\nLimitNPROC=4096\n\n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,r.jsx)(n.p,{children:"Save changes and exit: ^O, enter, ^X"}),"\n",(0,r.jsxs)(n.p,{children:["7\ufe0f\u20e3.4\ufe0f\u20e3 Create group for SonarQube, call it ",(0,r.jsx)(n.code,{children:"sonar"})," just like username:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'$ sudo groupadd sonar\n$ sudo useradd -c "sonar user" -d /opt/sonarqube/ -g sonar sonar\n$ sudo chown -R sonar:sonar /opt/sonarqube/\n'})}),"\n",(0,r.jsx)(n.p,{children:"7\ufe0f\u20e3.5\ufe0f\u20e3 Reload Daemon and start SonarQube service."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ systemctl daemon-reload\n$ systemctl start sonarqube.service\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"You may be asked for credentials, choose right identity and enter the password."})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["Server is now running, you can use ",(0,r.jsx)(n.code,{children:"systemctl status sonarqube.service"})," and ",(0,r.jsx)(n.code,{children:"sudo netstat -tlpn"})," to check the health."]})}),"\n",(0,r.jsx)(n.p,{children:"7\ufe0f\u20e3.6\ufe0f\u20e3 Before using the server, we need to install Nginx to redirect traffic from the local IP of the server."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ sudo apt-get install nginx\n$ sudo nano /etc/nginx/sites-enabled/sonarqube.conf\n"})}),"\n",(0,r.jsx)(n.p,{children:"Add these to the file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"server {\n  listen      80;\n  server_name 10.0.100.27;\n\n  access_log  /var/log/nginx/sonar.access.log;\n  error_log   /var/log/nginx/sonar.error.log;\n\n  proxy_buffers 16 64k;\n  proxy_buffer_size 128k;\n\n  location / {\n    proxy_pass http://127.0.0.1:9000;\n    proxy_next_upstream error timeout invalid_header http_500 http_502 http_503 http_504;\n    proxy_redirect off;\n\n    proxy_set_header    Host            $host;\n    proxy_set_header    X-Real-IP       $remote_addr;\n    proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_set_header    X-Forwarded-Proto https;\n  }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Save changes and exit: ^O, enter, ^X."}),"\n",(0,r.jsx)(n.p,{children:"7\ufe0f\u20e3.7\ufe0f\u20e3 Start the Nginx."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ systemctl daemon-reload\n$ systemctl start nginx\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can exit SSH session & close the shell:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ exit\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\ud83c\udfb1 Now the server is running, go to ",(0,r.jsx)(n.a,{href:"http://192.168.59.151:9000/",children:"http://192.168.59.151:9000/"})," to check it out."]}),"\n",(0,r.jsx)(n.p,{children:"To login, you will need to use the default credential:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Username: ",(0,r.jsx)(n.code,{children:"admin"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Password: ",(0,r.jsx)(n.code,{children:"admin"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Then, the server will require you to change password for the first login."})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>a});var r=s(7294);const l={},t=r.createContext(l);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);