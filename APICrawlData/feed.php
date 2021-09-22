<?php
class Feed
{
    private $title;
    private $category;
    private $pubDate;
    private $link;
    private $thumbnail;

    public function __construct($title, $category, $pubDate, $link, $thumbnail)
    {
        $this->title = $title;
        $this->category = $category;
        $this->pubDate = $pubDate;
        $this->link = $link;
        $this->thumbnail = $thumbnail;
    }
}