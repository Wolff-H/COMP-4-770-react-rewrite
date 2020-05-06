import Entity from './Entity'

/**********************************************************************************************************************/

interface Entities
{
    [id:number] :Entity
}

interface EntitiesTagMap
{
    [tag:string] :Entities
}

interface EntitiesLayerMap
{
    [layer:number] :Entities
}

class EntityManager
{
    entities                :Entities = {}
    entities_to_add         :Entity[] = []
    entities_to_delete_ids  :number[] = []

    entities_tag_map        :EntitiesTagMap = {}
    entities_layer_map      :EntitiesLayerMap = {}

    entity_id_counter       :number = 0

    update()
    {        
        // add to_add //
        for(let entity of this.entities_to_add)
        {
            this.entities[entity.id] = entity
            // add ref to tag map //
            let tags = entity.tags
            
            if(tags !== [])
            {
                for(let tag of tags)
                {
                    if(!this.entities_tag_map[tag])
                    {
                        this.entities_tag_map[tag] = {}
                    }
                    this.entities_tag_map[tag][entity.id] = entity
                }
            }
            // add ref to layer map //
            let layer = entity.layer

            if(!this.entities_layer_map[layer])
            {
                this.entities_layer_map[layer] = {}
            }
            this.entities_layer_map[layer][entity.id] = entity
        }

        this.entities_to_add = []

        // delete to_delete //
        this.removeDeadEntities()

        for(let id of this.entities_to_delete_ids)
        {
            // delete from tag map //
            for(let tag_dict of Object.values(this.entities_tag_map))
            {
                delete tag_dict[id]
            }
            // delete from layer map //
            delete this.entities_layer_map[this.entities[id].layer][id]
            // delete from entities //
            delete this.entities[id]
        }

        this.entities_to_delete_ids = []
    }

    removeDeadEntities() :void
    {
        for(let entity of Object.values(this.entities))
        {
            if(!entity.if_alive)
            {
                this.entities_to_delete_ids.push(entity.id)
            }
        }
    }

    addEntity(tags: []|string[], layer:number) :Entity
    {
        let entity = new Entity(this.entity_id_counter, layer, tags)
        this.entity_id_counter += 1

        this.entities_to_add.push(entity)

        return entity
    }

    getEntities(tag:string = ''): object
    {
        // get all entities //
        if(tag === '')
        {
            return this.entities
        }
        // get entities with the specified tag //
        else
        {
            if(this.entities_tag_map[tag])
            {
                return this.entities_tag_map[tag]
            }
            
            return {}
        }
    }
}

/**********************************************************************************************************************/

export default EntityManager











    // update()
    // {
    //     for(let entity of Object.entries(this.entities))
    //     {
    //         if(entity[1].if_alive == false){this.entities_to_delete.push(entity[0])}
    //     }

    //     for(let entity of this.entities_to_add)
    //     {
    //         this.entities[this.entity_id_counter] = entity

    //         if(this.entities_map_tag[entity['tag']] == null)
    //         {
    //             this.entities_map_tag[entity['tag']] = []
    //             this.entities_map_tag[entity['tag']].push(this.entity_id_counter)
    //         }
    //         else
    //         {
    //             this.entities_map_tag[entity['tag']].push(this.entity_id_counter)
    //         }

    //         if(this.entities_map_layer[entity['layer']] == null)
    //         {
    //             for(let i = 0; i <= entity['layer']; i++)
    //             {
    //                 if(this.entities_map_layer[i] == null)
    //                 {
    //                     this.entities_map_layer[i] = []
    //                 }
    //             }
    //             this.entities_map_layer[entity['layer']].push(this.entity_id_counter)
    //         }
    //         else
    //         {
    //             this.entities_map_layer[entity['layer']].push(this.entity_id_counter)
    //         }

    //         this.entity_id_counter += 1
    //     }
    //     this.entities_to_add = []


    //     for(let id of this.entities_to_delete)
    //     {
    //         if(this.entities[id] == null){continue;}
    //         let entity_to_del = this.entities[id]

    //         for(let tag of entity_to_del.tag)
    //         {
    //             this.entities_map_tag[tag] = this.entities_map_tag[tag].filter(item => item !== id)
    //         }
    //         this.entities_map_layer[entity_to_del.layer] = this.entities_map_layer[entity_to_del.layer].filter(item => item !== id)

    //         delete this.entities[id];
    //     }
    //     this.entities_to_delete = []

    // }

    // // addBlankEntity(in_tag) 
    // // {
    // //     let temp_entity = new Entity(in_tag);
    // //     this.entities_to_add.push(temp_entity)
    // // }

    // addCompeleteEntity(in_entity)
    // {
    //     let temp_entity = this.readEntity(in_entity)
    //     this.entities_to_add.push(temp_entity)
    // }

    // addPresetEntity(in_name) // parameter_in = [name of preset entity]
    // {
    //     let temp_entity = cloneDeep(this.entitity_map[in_name])
    //     this.entities_to_add.push(temp_entity)
    // }

    // getEntities(tag_name = '')
    // {
    //     let entities_out = []
    //     for(let id of this.entities_map_tag[tag_name])
    //     {
    //         entities_out.push(this.entities[id])
    //     }
    //     return entities_out
    // }
    
    // readEntity(entity_read)
    // {
    //     let entity_to_set = new Entity();
    //     entity_to_set.tag = entity_read['tag']
    //     entity_to_set.layer = entity_read['layer']
    //     for(let[comp_name, come_contant] of Object.entries(entity_read['components']))
    //     {
    //         entity_to_set.addComponent(comp_name, come_contant);
    //         if(comp_name == 'CTransform')
    //         {
    //             entity_to_set.addComponent('CTransform', come_contant);
    //         }
    //         else if(comp_name == 'CAnimation')
    //         {
    //             entity_to_set.addComponent('CAnimation', come_contant);
    //         }
    //         else if(comp_name == 'CInput')
    //         {
    //             entity_to_set.addComponent('CInput', come_contant);
    //         }
    //     }
    //     return entity_to_set
    // }

    // deleteEntity(id)
    // {
    //     this.entities_to_delete.push(id)
    // }
