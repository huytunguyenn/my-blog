"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4949],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||s;return n?a.createElement(k,l(l({ref:t},i),{},{components:n})):a.createElement(k,l({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<s;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_position:2},l="Set up SonarQube server",o={unversionedId:"learn/utils/sonarqube/install",id:"learn/utils/sonarqube/install",title:"Set up SonarQube server",description:"This guide will help you install and running SonarQube service on Ubuntu server.",source:"@site/docs/learn/utils/sonarqube/install.mdx",sourceDirName:"learn/utils/sonarqube",slug:"/learn/utils/sonarqube/install",permalink:"/my-blog/docs/learn/utils/sonarqube/install",draft:!1,editUrl:"https://github.com/huytunguyenn/my-blog/tree/main/docs/learn/utils/sonarqube/install.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"What is SonarQube?",permalink:"/my-blog/docs/learn/utils/sonarqube/intro"}},p={},u=[],i={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"set-up-sonarqube-server"},"Set up SonarQube server"),(0,r.kt)("p",null,"This guide will help you install and running SonarQube service on Ubuntu server."),(0,r.kt)("p",null,"1\ufe0f\u20e3 Ask IT to provide an Ubuntu server. Here\u2019s using ",(0,r.kt)("strong",{parentName:"p"},"Ubuntu 20.04.5 LTS")," with the credentials."),(0,r.kt)("p",null,"2\ufe0f\u20e3 Connect KMS VPN."),(0,r.kt)("p",null,"3\ufe0f\u20e3 Open shell, log in to the server using SSH session:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ssh leverege@192.168.59.151\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Enter the password if it asks for.")),(0,r.kt)("p",null,"4\ufe0f\u20e3 One of the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.sonarqube.org/latest/requirements/requirements/"},"prerequisites")," is to install Java:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo apt-get -y update\n$ sudo apt-get install openjdk-11-jdk\n")),(0,r.kt)("p",null,"5\ufe0f\u20e3 We need to install database, here\u2019s using ",(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/download/linux/ubuntu/"},"PostgreSQL"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo sh -c 'echo \"deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main\" > /etc/apt/sources.list.d/pgdg.list'\n$ wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -\n$ sudo apt-get update\n$ sudo apt-get -y install postgresql\n")),(0,r.kt)("p",null,"Then we need to configure Postgres:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo passwd postgres\n")),(0,r.kt)("p",null,"Then we create user sonar for SonarQube and log in to shell:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo su - postgres\n$ createuser sonar\n")),(0,r.kt)("p",null,"Enter the psql shell:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ psql\n")),(0,r.kt)("p",null,"Now, we\u2019re set password for the user, create database with sonar user as owner and grant all the rights to that user:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER USER sonar WITH ENCRYPTED PASSWORD 'admin';\nCREATE DATABASE sonarqube OWNER sonar;\nGRANT ALL PRIVILEGES ON DATABASE sonarqube to sonar;\n")),(0,r.kt)("p",null,"Exit psql shell and Postgres shell."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\\q\n$ exit\n")),(0,r.kt)("p",null,"Restart the server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ systemctl restart postgresql\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"If the prompt ask to authenticate, choose the ",(0,r.kt)("inlineCode",{parentName:"em"},"leverege")," identity and enter password, for example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Multiple identities can be used for authentication:\n 1.  SGH719TRJY (leverege)\n 2.  ,,, (kmsadmin)\nChoose identity to authenticate as (1-2): 1\nPassword: \ud83d\udd11\n")),(0,r.kt)("p",null,"Check service\u2019s status:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ systemctl status postgresql\n")),(0,r.kt)("p",null,"Make sure something like this appears: ",(0,r.kt)("em",{parentName:"p"},'"...PostgreSQL RDBMS ... Ative: active (exited)"'),". You can also install ",(0,r.kt)("inlineCode",{parentName:"p"},"net-tools")," package to check:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo apt install net-tools\n$ sudo netstat -tlpn\n")),(0,r.kt)("p",null,"You can see the IP and port that service is running on."),(0,r.kt)("p",null,"6\ufe0f\u20e3 Next, we\u2019re going to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.sonarqube.org/latest/requirements/requirements/"},"set up the system limits & kernel parameters"),"."),(0,r.kt)("p",null,"Edit ",(0,r.kt)("inlineCode",{parentName:"p"},"sysctl.conf")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo nano /etc/sysctl.conf\n")),(0,r.kt)("p",null,"Add these at the end of the file, under 2 line of ",(0,r.kt)("em",{parentName:"p"},"\u201c#kernel.sysrq=438\u201d"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vm.max_map_count=262144\nfs.file-max=65536\nulimit -n 65536\nulimit -u 4096\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Press ^X, Y then enter.")),(0,r.kt)("p",null,"Edit ",(0,r.kt)("inlineCode",{parentName:"p"},"limits.conf")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ nano /etc/security/limits.conf\n")),(0,r.kt)("p",null,"Add these at the end of the file, under the line ",(0,r.kt)("em",{parentName:"p"},"\u201c# End of file\u201d"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sonarqube   -   nofile   65536\nsonarqube   -   nproc    4096\n")),(0,r.kt)("p",null,"Reboot server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ reboot\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"If above is not working, use:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ systemctl reboot -i\n")),(0,r.kt)("p",null,"7\ufe0f\u20e3 Install and configure SonarQube:"),(0,r.kt)("p",null,"7\ufe0f\u20e3.1\ufe0f\u20e3 First, log in again to the server like step 3\ufe0f\u20e3. Then, download the SonarQube zip file from ",(0,r.kt)("a",{parentName:"p",href:"https://binaries.sonarsource.com/?prefix=Distribution/sonarqube/"},"here"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd /opt/\n$ sudo curl -L -O https://binaries.sonarsource.com/Distribution/sonarqube/sonarqube-9.7.1.62043.zip\n")),(0,r.kt)("p",null,"Unzip the file (you might need to install unzip) and rename destination folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo apt install unzip\n$ sudo unzip sonarqube-9.7.1.62043.zip\n$ sudo rm -rf sonarqube-9.7.1.62043.zip\n$ sudo mv sonarqube-9.7.1.62043/ sonarqube\n")),(0,r.kt)("p",null,"7\ufe0f\u20e3.2\ufe0f\u20e3 Set up SonarQube properties:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo nano sonarqube/conf/sonar.properties\n")),(0,r.kt)("p",null,"Go to the line ",(0,r.kt)("em",{parentName:"p"},"\u201c# The schema must be created first.\u201d"),", uncomment 2 lines below and add:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sonar.jdbc.username=sonar\nsonar.jdbc.password=admin\n")),(0,r.kt)("p",null,"Change Postgres schema: under the line ",(0,r.kt)("em",{parentName:"p"},"\u201c# By default the schema named \u201cpublic\u201d is used. It can be \u2026\u201d"),", uncomment and remove ",(0,r.kt)("em",{parentName:"p"},"\u201c?currentSchema=my_schema\u201d"),"."),(0,r.kt)("p",null,"Go to ",(0,r.kt)("em",{parentName:"p"},"\u201cELASTICSEARCH\u201d")," section, uncomment line below the line ",(0,r.kt)("em",{parentName:"p"},"\u201c# JVM options of Elasticsearch process\u201d"),"."),(0,r.kt)("p",null,"Save changes and exit nano by ^X, Y then enter."),(0,r.kt)("p",null,"7\ufe0f\u20e3.3\ufe0f\u20e3 Now, we\u2019re creating SonarQube service: create the ",(0,r.kt)("inlineCode",{parentName:"p"},"sonarqube.service")," file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo nano /etc/systemd/system/sonarqube.service\n")),(0,r.kt)("p",null,"based on the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"[Unit]\nDescription=SonarQube service\nAfter=syslog.target network.target\n\n[Service]\nType=forking\n\nExecStart=/opt/sonarqube/bin/linux-x86-64/sonar.sh start\nExecStop=/opt/sonarqube/bin/linux-x86-64/sonar.sh stop\n\nUser=sonar\nGroup=sonar\nRestart=always\n\nLimitNOFILE=65536\nLimitNPROC=4096\n\n[Install]\nWantedBy=multi-user.target\n")),(0,r.kt)("p",null,"Save changes and exit: ^O, enter, ^X"),(0,r.kt)("p",null,"7\ufe0f\u20e3.4\ufe0f\u20e3 Create group for SonarQube, call it ",(0,r.kt)("inlineCode",{parentName:"p"},"sonar")," just like username:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ sudo groupadd sonar\n$ sudo useradd -c "sonar user" -d /opt/sonarqube/ -g sonar sonar\n$ sudo chown -R sonar:sonar /opt/sonarqube/\n')),(0,r.kt)("p",null,"7\ufe0f\u20e3.5\ufe0f\u20e3 Reload Daemon and start SonarQube service."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ systemctl daemon-reload\n$ systemctl start sonarqube.service\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"You may be asked for credentials, choose right identity and enter the password.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Server is now running, you can use ",(0,r.kt)("inlineCode",{parentName:"em"},"systemctl status sonarqube.service")," and ",(0,r.kt)("inlineCode",{parentName:"em"},"sudo netstat -tlpn")," to check the health.")),(0,r.kt)("p",null,"7\ufe0f\u20e3.6\ufe0f\u20e3 Before using the server, we need to install Nginx to redirect traffic from the local IP of the server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo apt-get install nginx\n$ sudo nano /etc/nginx/sites-enabled/sonarqube.conf\n")),(0,r.kt)("p",null,"Add these to the file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"server {\n  listen      80;\n  server_name 10.0.100.27;\n\n  access_log  /var/log/nginx/sonar.access.log;\n  error_log   /var/log/nginx/sonar.error.log;\n\n  proxy_buffers 16 64k;\n  proxy_buffer_size 128k;\n\n  location / {\n    proxy_pass http://127.0.0.1:9000;\n    proxy_next_upstream error timeout invalid_header http_500 http_502 http_503 http_504;\n    proxy_redirect off;\n\n    proxy_set_header    Host            $host;\n    proxy_set_header    X-Real-IP       $remote_addr;\n    proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_set_header    X-Forwarded-Proto https;\n  }\n}\n")),(0,r.kt)("p",null,"Save changes and exit: ^O, enter, ^X."),(0,r.kt)("p",null,"7\ufe0f\u20e3.7\ufe0f\u20e3 Start the Nginx."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ systemctl daemon-reload\n$ systemctl start nginx\n")),(0,r.kt)("p",null,"You can exit SSH session & close the shell:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ exit\n")),(0,r.kt)("p",null,"\ud83c\udfb1 Now the server is running, go to ",(0,r.kt)("a",{parentName:"p",href:"http://192.168.59.151:9000/"},"http://192.168.59.151:9000/")," to check it out."),(0,r.kt)("p",null,"To login, you will need to use the default credential:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Username: ",(0,r.kt)("inlineCode",{parentName:"p"},"admin"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Password: ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")))),(0,r.kt)("p",null,"Then, the server will require you to change password for the first login."))}c.isMDXComponent=!0}}]);