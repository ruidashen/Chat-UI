rm -rf build &&
npm run build &&
cd build &&
git init  &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin https://github.com/ruidashen/chat-ui-site.git &&
git push -f -u origin master &&
cd -
echo https://chat-ui-site.vercel.app/
