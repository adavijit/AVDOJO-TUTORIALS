<?php
function crawl_page($url,$depth=2)
{
    if($depth>0)
    {
        $html = file_get_contents($url);
        preg_match_all('~<a.*?href="(.*?)".*?>~',$html,$matches);
        foreach($matches[1] as $newurl)
        {
            crawl_page($newurl,$depth-1);
        }
        file_put_contents('results.html',"\n\n".$html."\n\n",FILE_APPEND);
    }
}
crawl_page('https://www.foxsports.com/soccer/scores',2);
