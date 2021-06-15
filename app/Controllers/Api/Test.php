<?php

namespace App\Controllers\Api;


use CodeIgniter\RESTful\ResourceController;

class Test extends ResourceController
{
    protected $modelName = '';
    protected $format    = 'json';

    public function index()
    {
        return $this->respond([
            ['id' => 1, 'name' => 'abc'],
        ], 200);
    }
}
