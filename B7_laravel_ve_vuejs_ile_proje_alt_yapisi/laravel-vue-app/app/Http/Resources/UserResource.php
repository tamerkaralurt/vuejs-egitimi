<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        /**
         * Bazen tüm tablodaki kolon bilgilerinin gitmesini istemeyiz. Bunu veritabanından çekerken select komutu ile yapabiliyoruz.
         * Ancak genel olarak tanımlamak ve sürekli kullanmak istersek resource tanımlayıp, göstermek istemediğimiz kolonları burada filtreleyebiliriz.
         * Varsayılan olarak gelen komut: return parent::toArray($request);
         */
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email
        ];
    }
}
