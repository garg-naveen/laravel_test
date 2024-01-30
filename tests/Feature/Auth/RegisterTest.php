<?php

namespace Tests\Feature\Auth;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class RegisterTest extends TestCase
{
    // use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_user_can_register()
    {
        $this->postJson(route('users.register'), [
            'name' => 'testing',
            'email' => 'testing@gmail.com',
            'password' => 'password',
            'password_confirmation' => 'password'
        ])->assertCreated();

        $this->assertDatabaseHas('users', ['name' => 'testing']);
    }
}
